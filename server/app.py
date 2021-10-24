from os import removedirs
from flask import Flask, render_template, request, redirect
from auth_new import gmail_authenticate, check_auth
from mailsender import email_sender

# Service Functions

def is_not_blank(s):
    return bool(s and not s.isspace())



app = Flask(__name__)

#@app.route("/")
@app.route("/", methods=["GET", "POST"])
def index():
	if check_auth() == True:
		auth_status = "True"
	else:
		auth_status = "False"

	if request.method == "POST":
		print("Post method yay")
		final_greeting = "\nThanks so much for the opportunity. Looking forward to hearing back from you." + "\n\nRegards,\nFahim Faisal"
		email = request.form.get("email").strip()
		company_name = request.form.get("company").strip()
		position_name = request.form.get("position").strip()
		additional_msg = request.form.get("additional-msg")
		if is_not_blank(additional_msg):
			additional_msg = request.form.get("additional-msg").strip()
			msg_body = "Hello, \nI am Fahim Faisal and I am applying for the position " + position_name + " at " + company_name + ".\n" + additional_msg + "\nI have attached my CV below and I have my online portfolio here: https://fahim.tech\n" + final_greeting
		else:
			msg_body = "Hello, \nI am Fahim Faisal and I am applying for the position " + position_name + " at " + company_name + ". I have attached my CV below and I have my online portfolio here: https://fahim.tech\n" + final_greeting

		msg_subject = "Applying for " + position_name + " position"

		email_sender(email,msg_subject,msg_body)

		return redirect(request.host_url)

	return render_template("indexy.html", auth_status=auth_status)


@app.route("/preview/")
def preview():
	print("hello")
	return (''), 204

@app.route("/auth/")
def start_auth():
	gmail_authenticate()
	return (''), 204

if __name__ == '__main__':
	app.run(debug=True)
