from django.shortcuts import render
from ..models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .serializers import *


# unAuthorized Users
@api_view(['GET'])
def homePageArticles(request):
    home_page_articles = Post.objects.all()
    serializer = PostSerializer(home_page_articles, many=True)
    return Response(serializer.data)




# Authorized Users

def userArticles(request):
    pass

def userProfile(request):
    pass


def articleDetails(request):
    pass

def createArticle(request):
    pass

def editArticle(request):
    pass

def deleteArticle(request):
    pass

def likeDislikeArticle(request):
    pass

#Favorite List

def favoriteLists(request):
    pass

def addFavoriteList(request): 
    pass

def addItemToFavoriteList(request): 
    pass

def deleteFavoriteList(request): # delete all favorite lists by one click
    pass


def createComment(request): 
    pass
