from django.db import models
from django.contrib.auth.models import AbstractUser
from medium.models import FavoriteList

class CustomUser(AbstractUser):
    favorite_lists = models.ForeignKey(FavoriteList, on_delete=models.PROTECT, blank=True, null=True)
