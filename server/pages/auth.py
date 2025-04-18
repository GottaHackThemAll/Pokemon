from flask import Blueprint, jsonify, request
from app import jwt, bcrypt
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
        user = conn.execute('SELECT * FROM users WHERE username=?', (username,)).fetchone()
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