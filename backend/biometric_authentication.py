from flask import Flask, request, jsonify
import face_recognition
import cv2

app = Flask(__name__)

@app.route('/biometric-auth', methods=['POST'])
def biometric_auth():
    image_data = request.files['image'].read()
    image = cv2.imdecode(np.frombuffer(image_data, np.uint8), -1)
    known_image = face_recognition.load_image_file("known_image.jpg")
    known_encoding = face_recognition.face_encodings(known_image)[0]
    unknown_encoding = face_recognition.face_encodings(image)[0]

    results = face_recognition.compare_faces([known_encoding], unknown_encoding)
    if results[0]:
        return jsonify({"status": "Authentication successful"})
    else:
        return jsonify({"status": "Authentication failed"})

if __name__ == '__main__':
    app.run(debug=True)