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
    comments = Comment.objects.filter(articleID=article_id)
    comments_serializer = CommentSerializer(comments, many=True)
    article = get_object_or_404(Article, slug=article_slug, id=article_id)
    article_serializer = ArticleSerializer(article)
    return Response({'articleDetails':article_serializer.data, 'comments':comments_serializer.data})

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

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def likeDislikeArticle(request, article_id):
    article = get_object_or_404(Article, id=article_id)
    if article.likes.filter(id=request.user.id).exists():
        article.likes.remove(request.user.id)
    else:
        article.likes.add(request.user.id)
    return Response('success')

#Favorite List
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addToAndRemoveFromFavoriteList(request, article_id):
    article = get_object_or_404(Article, id=article_id)
    if article.favorite_articles.filter(id=request.user.id).exists():
        article.favorite_articles.remove(request.user.id)
    else:
        article.favorite_articles.add(request.user.id)
    return Response('success')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addComment(request, article_id):
    article = get_object_or_404(Article, id=article_id)
    Comment.objects.create(userID=request.user, content=request.data['newComment'], articleID=article)
    return Response()



