from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required
import os
from datetime import timedelta
from db_util import get_db_connection
from flask_cors import CORS, cross_origin

bcrypt = Bcrypt()
jwt = JWTManager()
cors = CORS()

def create_app():
    app = Flask(__name__)
    
    app.config["JWT_SECRET_KEY"] = str(os.getenv("JWT_SECRET_KEY"))
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=5)
    
    bcrypt.init_app(app)
    jwt.init_app(app)
    cors.init_app(app)
    
    
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)
    
    # adding different routes
    from pages.user import user_blueprint
    from pages.auth import auth_bp
    from pages.post import post_bp
    app.register_blueprint(user_blueprint, url_prefix='/users')
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(post_bp, url_prefix='/posts')
    
    @app.route('/')
    def initial():
        return "The server is alive and well!"
    return app
    

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)