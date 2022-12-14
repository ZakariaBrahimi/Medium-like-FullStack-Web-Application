from django.db import models
from django.conf import settings 
from django.utils.text import slugify
from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver

#TODO: Put blank and null attributes o each table columns
class Article(models.Model):
    slug         = models.SlugField(blank=True, null=True)
    title        = models.CharField(max_length=100)
    HTMLBody     = models.TextField()
    userID       = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_time = models.DateTimeField(auto_now_add=True)
    favorite_articles = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='favorites')
    likes             = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='likes')
    
    def save(self, *arg, **kwarg):
        #if not self.slug:
        self.slug = slugify(self.title)
        super(Article, self).save(*arg, **kwarg)
    
    class Meta:
        ordering = ['-created_time']
    def __str__(self):
        return self.title

class Comment(models.Model):
    content = models.TextField()
    userID  = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    articleID  = models.ForeignKey(Article, on_delete=models.CASCADE)
    created_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_time']

    def __str__(self):
        return f'A comment created by {self.userID.username} on {self.articleID.title}'

    """def get_absolute_url(self):
        return reverse("_detail", kwargs={"pk": self.pk})"""

class Follow(models.Model):
    current_userID = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='current_userID')
    followed_user  = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.followed_user.username} followed by {self.current_userID.username}'
    
"""class Interaction(models.Model):
    INTERACTIONS = (
        ('love', 'LOVE'),
        ('support', 'SUPPORT'),
        ('celebrate', 'CELEBRATE'),
        ('insightful', 'INSIGHTFUL'),
        ('curious', 'CURIOUS'),
        ('like', 'LIKE'),
    )
    userID  = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    articleID  = models.ForeignKey(Article, on_delete=models.CASCADE)
    interaction_type = models.CharField(max_length=20, choices=INTERACTIONS)"""
    
"""class FavoriteList(models.Model):
    articles = models.ForeignKey(Article, on_delete=models.PROTECT, blank=True, null=True)
    user     = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)"""
    
    


"""@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_favorite_list(sender, instance, created, **kwargs):
	if created:
		FavoriteList.objects.create(user=instance)"""

