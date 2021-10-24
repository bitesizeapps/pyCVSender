import os
import pickle
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

#SCOPES = ['https://mail.google.com/']
SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

def check_auth():
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    else:
        return "No token file exists"

    if creds.valid:
        return "cred exists: not valid"
    else:
        return "cred exists: valid"


print(check_auth())
