from flask import Blueprint, jsonify, request
from app import bcrypt, cross_origin
from app import jwt_required
from db_util import get_db_connection

user_blueprint = Blueprint('user', __name__)

def get_one_poggist(id):
    try:
        conn = get_db_connection()
        user = conn.execute('SELECT * FROM users WHERE id=?', (id,)).fetchone()
        conn.close()
        if user:
            return dict(user)
        
        return None
    except Exception as e:
        return str(e)        

# GET ALL USERS
@user_blueprint.route('/getAllUsers', methods=['GET'])
@jwt_required()
@cross_origin()
def get_user():
    try:
        conn = get_db_connection()
        allUsers = conn.execute('SELECT * FROM users').fetchall()
        convert_allUsers = [dict(row) for row in allUsers]
        conn.close()
        
        return jsonify(status=200, message="Success", users=convert_allUsers)
    except Exception as e:
        return jsonify(status=400, message=str(e))

# ADD A USER
@user_blueprint.route('/addUser', methods=['POST'])
@cross_origin()
def add_user():
    try:
        # check json req body
        data = request.get_json()
        required_fields = ['username', 'password']
        for field in required_fields:
            if field not in data:
                return jsonify(status=400, message=f"Missing {field}")
            
        username = data['username']
        password = data['password']
        
        # hash password
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        
        # add user
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor = conn.execute('INSERT INTO users(username, password, maxUSA, maxChina, maxKorea, maxItaly, maxJapan) VALUES (?, ?, ?, ?, ?, ?, ?)', 
                              (username, hashed_password, 0, 0, 0, 0, 0))
        conn.commit()
        conn.close()
        
        return jsonify(status=200, message="Successfully added user!")
    except Exception as e:
        return jsonify(status=400, message=str(e))
    
@user_blueprint.route('/byUsername', methods=['GET'])
@jwt_required()
@cross_origin()
def getbyusername():
    try:
        username = request.args.get('username')
        
        conn = get_db_connection()
        user = conn.execute('SELECT * FROM users WHERE username=?', (username,)).fetchone()
        conn.close()
        
        if len(dict(user)) != 0:
            return jsonify(status=200, message="success", user=dict(user)), 200
        else:
            return jsonify(status=403, message="user not found"), 400
    except Exception as e:
        return jsonify(status=400, message=str(e)), 400