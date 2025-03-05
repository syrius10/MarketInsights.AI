import smtplib
from email.mime.text import MIMEText
from twilio.rest import Client

class Alerts:
    def __init__(self, email_smtp, email_user, email_pass, twilio_sid, twilio_token):
        self.email_smtp = email_smtp
        self.email_user = email_user
        self.email_pass = email_pass
        self.twilio_sid = twilio_sid
        self.twilio_token = twilio_token

    def send_email(self, to_email, subject, message):
        msg = MIMEText(message)
        msg['Subject'] = subject
        msg['From'] = self.email_user
        msg['To'] = to_email

        with smtplib.SMTP(self.email_smtp) as server:
            server.login(self.email_user, self.email_pass)
            server.sendmail(self.email_user, to_email, msg.as_string())

    def send_sms(self, to_number, message):
        client = Client(self.twilio_sid, self.twilio_token)
        client.messages.create(body=message, from_='+1234567890', to=to_number)