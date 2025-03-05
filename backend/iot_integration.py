import paho.mqtt.client as mqtt

class IoTIntegration:
    def __init__(self, broker, port):
        self.client = mqtt.Client()
        self.client.connect(broker, port, 60)

    def subscribe(self, topic):
        self.client.subscribe(topic)

    def publish(self, topic, payload):
        self.client.publish(topic, payload)

    def on_message(self, client, userdata, message):
        print(f"Received message: {message.payload.decode()} on topic {message.topic}")