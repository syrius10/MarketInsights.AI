from flask import Flask, request, jsonify
import dialogflow_v2 as dialogflow
from google.protobuf.json_format import MessageToJson

app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json.get('message')
    session_client = dialogflow.SessionsClient()
    session = session_client.session_path('your_project_id', 'unique_session_id')
    text_input = dialogflow.types.TextInput(text=user_message, language_code='en')
    query_input = dialogflow.types.QueryInput(text=text_input)
    response = session_client.detect_intent(session=session, query_input=query_input)
    response_text = response.query_result.fulfillment_text
    return jsonify({'response': response_text})

@app.route('/voice', methods=['POST'])
def voice():
    user_message = request.json.get('message')
    session_client = dialogflow.SessionsClient()
    session = session_client.session_path('your_project_id', 'unique_session_id')
    text_input = dialogflow.types.TextInput(text=user_message, language_code='en')
    query_input = dialogflow.types.QueryInput(text=text_input)
    response = session_client.detect_intent(session=session, query_input=query_input)
    response_text = response.query_result.fulfillment_text
    return jsonify({'response': response_text})

if __name__ == '__main__':
    app.run(debug=True)