from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required
import os
from db_util import get_db_connection

bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    
    app.config["JWT_SECRET_KEY"] = str(os.getenv("JWT_SECRET_KEY"))
    
    bcrypt.init_app(app)
    jwt.init_app(app)
    
    # adding different routes
    from pages.user import user_blueprint
    from pages.auth import auth_bp
    app.register_blueprint(user_blueprint, url_prefix='/users')
    app.register_blueprint(auth_bp, url_prefix='/auth')
    
    @app.route('/')
    def initial():
        return "The server is alive and well!"
    return app
    

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)