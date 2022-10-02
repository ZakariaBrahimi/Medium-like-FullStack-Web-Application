from django.urls import path, include
from .views import *

urlpatterns = [
    path('home-page-articles', homePageArticles),
    path('article/<int:article_id>/<str:article_slug>/', articleDetails),
    path('create-new-article', createArticle),
    path('my-articles', userArticles),
    path('user-profile/', userProfile),
    path('delete-article/<int:article_id>', deleteArticle),
    path('add-to-remove-from-favorite/<int:article_id>', addToAndRemoveFromFavoriteList),
    path('like-dislike-article/<int:article_id>', likeDislikeArticle),
    path('add-comment/<int:article_id>', addComment),
    ]