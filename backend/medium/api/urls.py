from django.urls import path, include
from .views import *

urlpatterns = [
    path('home-page-articles', homePageArticles),
    #path('/article/<id:int>/<slug:str>', articleDetails),
    ]