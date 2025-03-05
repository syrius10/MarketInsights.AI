from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)

@babel.localeselector
def get_locale():
    return request.accept_languages.best_match(['en', 'es', 'fr', 'de', 'zh'])

@app.route('/greet', methods=['GET'])
def greet():
    return jsonify({'message': gettext('Hello, World!')})