# Generated by Django 3.2.15 on 2022-09-29 16:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('medium', '0003_auto_20220929_1507'),
        ('userAccount', '0003_alter_customuser_favorite_lists'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='favorite_lists',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='medium.favoritelist'),
        ),
    ]