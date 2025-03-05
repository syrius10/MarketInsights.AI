from kafka import KafkaConsumer, KafkaProducer
import json

class RealTimeStreaming:
    def __init__(self, bootstrap_servers):
        self.consumer = KafkaConsumer(
            'real_time_topic',
            bootstrap_servers=bootstrap_servers,
            auto_offset_reset='earliest',
            enable_auto_commit=True,
            group_id='real_time_group',
            value_deserializer=lambda x: json.loads(x.decode('utf-8'))
        )
        self.producer = KafkaProducer(
            bootstrap_servers=bootstrap_servers,
            value_serializer=lambda x: json.dumps(x).encode('utf-8')
        )

    def consume_messages(self):
        for message in self.consumer:
            print(f"Consumed message: {message.value}")

    def produce_message(self, message):
        self.producer.send('real_time_topic', value=message)
        self.producer.flush()