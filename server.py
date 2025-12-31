from flask import Flask, request, jsonify
import sqlite3, random, smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

# Affiliate links pool
affiliate_links = [
    "https://affiliate1.com",
    "https://affiliate2.com",
    "https://affiliate3.com"
]

# Initialize DB
def init_db():
    conn = sqlite3.connect("users.db")
    c = conn.cursor()
    c.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT UNIQUE)")
    conn.commit()
    conn.close()

init_db()

def send_email(to_email, subject, body):
    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = "you@yourdomain.com"
    msg["To"] = to_email
    s = smtplib.SMTP("localhost", 25)  # assumes Postfix running locally
    s.sendmail("you@yourdomain.com", [to_email], msg.as_string())
    s.quit()

@app.route("/signup", methods=["POST"])
def signup():
    email = request.form["email"]
    chosen = random.choice(affiliate_links)
    conn = sqlite3.connect("users.db")
    c = conn.cursor()
    c.execute("INSERT OR IGNORE INTO users (email) VALUES (?)", (email,))
    conn.commit()
    conn.close()
    send_email(email, "Your Offer", f"Here’s your link: {chosen}")
    return jsonify({"status":"ok"})

@app.route("/send-newsletter", methods=["POST"])
def newsletter():
    subject = request.form["subject"]
    body = request.form["body"]
    conn = sqlite3.connect("users.db")
    c = conn.cursor()
    c.execute("SELECT email FROM users")
    for (email,) in c.fetchall():
        send_email(email, subject, body + "\n\nUnsubscribe link here")
    conn.close()
    return jsonify({"status":"newsletter sent"})

if __name__ == "__main__":
    app.run(debug=True)
