from flask import Blueprint, jsonify, request
from app import jwt, bcrypt, create_access_token, jwt_required, unset_jwt_cookies
from db_util import get_db_connection

auth_bp = Blueprint('auth', __name__)

@auth_bp.route("/login", methods=['POST'])
def login():
    try:
        data = request.get_json()
        required_fields = ['username', 'password']
        for field in required_fields:
            if field not in data:
                return jsonify(status=400, message=f"Missing {field}")
            
        username = data['username']
        password = data['password']
            
        # login logic
        conn = get_db_connection()
        user = conn.execute('SELECT * FROM users WHERE username=?', (username,)).fetchall()
        user_list = [dict(row) for row in user]
        conn.close()
        if len(user_list) == 0:
            return jsonify(status=404, message="Username not found")
        else:
            daUser = user_list[0]
            stored_hash = daUser['password']
            if bcrypt.check_password_hash(stored_hash, password):
                access_token = create_access_token(identity=str(username))
                return jsonify(status=200, message="Login Successful pog", token=access_token)
            else:
                return jsonify(status=403, message="Incorrect Password")
    except Exception as e:
        return jsonify(status=400, message=str(e))
    
@auth_bp.route("/logout", methods=['POST'])
@jwt_required()
def logout():
    try:
        response = jsonify({'logout': True})
        unset_jwt_cookies(response)
        return response, 200
    except Exception as e:
        return jsonify(message=str(e)), 400