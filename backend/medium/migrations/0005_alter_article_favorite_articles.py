# Generated by Django 3.2.15 on 2022-10-01 17:42

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('medium', '0004_auto_20221001_1734'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='favorite_articles',
            field=models.ManyToManyField(blank=True, related_name='favorite_articles', to=settings.AUTH_USER_MODEL),
        ),
    ]