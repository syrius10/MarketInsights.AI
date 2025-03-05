from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json.get('message')
    sentiment = TextBlob(user_message).sentiment.polarity
    if sentiment > 0:
        response = "I'm glad you're feeling good! How can I assist you today?"
    elif sentiment < 0:
        response = "I'm sorry to hear that. I'm here to help. What can I do for you?"
    else:
        response = "How can I assist you today?"
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)