from flask import Blueprint, jsonify, request, json
from app import jwt_required, cross_origin
from db_util import get_db_connection
import base64

post_bp = Blueprint('post', __name__)

@post_bp.route('/postPost', methods=['POST'])
@jwt_required()
@cross_origin()
def post_that_post():
    try:
        # data = request.form.to_dict()
        
        if 'buttface' not in request.form:
            return jsonify(status=400, message="missing json")
        
        json_data = request.form['buttface']
        data = json.loads(json_data)
        
        required_fields = ['userId', 'cuisineType', 'cuisineLevel', 
                           'timeCreated', 'title', 'likeCount', 'body']
        for field in required_fields:
            if field not in data:
                return jsonify(status=400, message=f"Missing {field}")
    
        userId = int(data['userId'])
        cuisineType = data['cuisineType']
        cuisineLevel = data['cuisineLevel']
        timeCreated = data['timeCreated']
        title = data['title']
        likeCount = data['likeCount']
        body = data['body']
        
        if 'foodImage' not in request.files:
            return jsonify(status=400, message="no image brotha")
        
        foodImage = request.files['foodImage']
        
        foodImage_binary = foodImage.read()
        
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('INSERT INTO posts(userId, cuisineType, cuisineLevel, timeCreated, title, likeCount, body, foodImage) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                       (userId, cuisineType, cuisineLevel, timeCreated, title, likeCount, body, foodImage_binary))
        conn.commit()
        conn.close()
        
        return jsonify(status=200, message="Successfully posted!")
    except Exception as e:
        return jsonify(status=400, message=str(e)), 400
    
@post_bp.route('/getAllPosts', methods=['GET'])
@jwt_required()
@cross_origin()
def letsgetalltheseskibidiposts():
    try:
        conn = get_db_connection()
        allPosts = conn.execute('SELECT * FROM posts').fetchall()
        convert_allPosts = [dict(row) for row in allPosts]
        
        conn.close()

        post_info = {}
        pictures = []
        
        for index, original_dict in enumerate(convert_allPosts):
            new_post_entry = {
                k: (v if k != 'foodImage' else pictures.append(base64.b64encode(original_dict['foodImage']).decode('utf-8'))) 
                for k, v in original_dict.items()
            }
            post_info[index] = new_post_entry
            
        
        return jsonify(status=200, message="Success", posts=post_info, pictures=pictures)
    except Exception as e:
        return jsonify(status=400, message=str(e))
    
@post_bp.route("/getByLevelAndType", methods=['GET'])
@jwt_required()
@cross_origin()
def lvltype():
    try:
        cuisineLevel = int(request.args.get('cuisineLevel'))
        cuisineType = request.args.get('cuisineType')
        
        conn = get_db_connection()
        posts = conn.execute('SELECT * FROM posts WHERE cuisineLevel=? AND cuisineType=? AND id != (SELECT MAX(id) FROM posts)', (cuisineLevel, cuisineType,)).fetchall()
        conn.close()
        
        list_of_dicts = [dict(row) for row in posts]
        post_dict = {}
        pics = []
        
        for index, original_dict in enumerate(list_of_dicts):
            new_post_entry = {
                k: (v if k != 'foodImage' else pics.append(base64.b64encode(original_dict['foodImage']).decode('utf-8'))) 
                for k, v in original_dict.items()
            }
            post_dict[index] = new_post_entry
        
        return jsonify(status=200, message="Success", posts=post_dict, pictures=pics)
    except Exception as e:
        return jsonify(status=400, message=str(e)), 400
    
@post_bp.route('/getUserLatest', methods=['GET'])
@jwt_required()
@cross_origin()
def getlatest():
    try:
        conn = get_db_connection()
        latest_post = conn.execute('SELECT * FROM posts ORDER BY id DESC LIMIT 1').fetchone()
        conn.close()
        
        if latest_post:
            latest_post_dict = dict(latest_post)
            
            if 'foodImage' in latest_post_dict:
                latest_post_dict['foodImage'] = base64.b64encode(latest_post_dict['foodImage']).decode('utf-8')
            
            return jsonify(status=200, message="Success", post=latest_post_dict)
        else:
            return jsonify(status=404, message="No posts found"), 404
    except Exception as e:
        return jsonify(status=400, message=str(e)), 400
            