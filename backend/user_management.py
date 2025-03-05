from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
jwt = JWTManager(app)

users = []

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']
    role = data['role']
    users.append({'username': username, 'password': password, 'role': role})
    return jsonify({"message": "User registered successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    user = next((u for u in users if u['username'] == username and u['password'] == password), None)
    if user:
        access_token = create_access_token(identity={'username': username, 'role': user['role']})
        return jsonify(access_token=access_token)
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/users', methods=['GET'])
@jwt_required()
def get_users():
    return jsonify(users)

@app.route('/users/<username>', methods=['DELETE'])
@jwt_required()
def delete_user(username):
    global users
    users = [u for u in users if u['username'] != username]
    return jsonify({"message": "User deleted successfully"})