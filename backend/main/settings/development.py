from .base import *

SECRET_KEY = 'django-insecure-0)*ut3#rg$+%yi6=x4-utsc%(4ajo&o%@34$+b0)#vwv8r79_w'

DEBUG = True

ALLOWED_HOSTS = ["*"]

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}