from ..models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .serializers import *
from django.contrib.auth import get_user_model

User = get_user_model()
# unAuthorized Users
@api_view(['GET'])
def homePageArticles(request):
    home_page_articles = Article.objects.all()
    serializer = ArticleSerializer(home_page_articles, many=True)
    return Response(serializer.data)

# Authorized Users

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def userArticles(request):
    user_articles = Article.objects.filter(userID=request.user)
    serializer    = ArticleSerializer(user_articles, many=True)
    print(user_articles)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def userProfile(request):
    user = get_object_or_404(User, username=request.user.username, id=request.user.id, email=request.user.email)
    serialize = UserSerializer(user)
    return Response(serialize.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def articleDetails(request, article_slug, article_id):
    article = get_object_or_404(Article, userID=request.user.id, slug=article_slug, id=article_id)
    serializer = ArticleSerializer(article)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createArticle(request):
    data = request.data
    new_article = Article.objects.create(userID=request.user, title=data['title'], HTMLBody=data['HTMLBody'])
    serialize = ArticleSerializer(new_article)
    return Response(serialize.data)

def editArticle(request):
    pass

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def deleteArticle(request, article_id):
    article = get_object_or_404(Article, id=article_id, userID=request.user)
    article.delete()
    return Response('deleted successfully')

def likeDislikeArticle(request):
    pass

#Favorite List
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addToFavoriteList(request, article_id): 
    article = get_object_or_404(Article, id=article_id, userID=request.user)
    favorite_list = FavoriteList.objects.all()
    print(favorite_list)

def deleteFromFavoriteList(request): # delete all favorite lists by one click
    pass


def createComment(request): 
    pass
