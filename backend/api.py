from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from advanced_predictive_models import AdvancedPredictiveModels
from report_generation import ReportGeneration

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
jwt = JWTManager(app)

# Initialize services
predictive_models = AdvancedPredictiveModels()
report_generation = ReportGeneration()

@app.route('/api/predictive/train_gb', methods=['POST'])
@jwt_required()
def train_gradient_boosting():
    data = request.json.get('data', [])
    target = request.json.get('target', [])
    model = predictive_models.train_gradient_boosting(data, target)
    return jsonify(model.to_json())

@app.route('/api/predictive/train_rf', methods=['POST'])
@jwt_required()
def train_random_forest():
    data = request.json.get('data', [])
    target = request.json.get('target', [])
    model = predictive_models.train_random_forest(data, target)
    return jsonify(model.to_json())

@app.route('/api/predictive/train_prophet', methods=['POST'])
@jwt_required()
def train_prophet():
    data = request.json.get('data', [])
    model = predictive_models.train_prophet(data)
    return jsonify(model.to_json())

@app.route('/api/report/generate', methods=['POST'])
@jwt_required()
def generate_report():
    context = request.json.get('context', {})
    template_path = request.json.get('template_path', 'templates/report_template.html')
    output_path = 'reports/report.pdf'
    report_path = report_generation.generate_pdf_report(context, template_path, output_path)
    return jsonify({"status": "success", "report_path": report_path})

if __name__ == '__main__':
    app.run(debug=True)