# pyCVSender

## Sending your CVs with custom formatting without any of the hassle

Serverless demo is available here: https://bitesizeapps.github.io/pyCVSender/ (only ui, no server)

### Setup

- Get `credentials.json` from [Gmail API](https://developers.google.com/gmail/api) and put it in the `server` folder

- Installs requirements in server folder using `pip3 install -r requirements.txt`

- In `mailsender.py`, line 25, change the `own_email` string to your own email that you're going to authenticate

- Run `app.py` using python/flask/node and should be good to go
