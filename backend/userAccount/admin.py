from django.contrib import admin
from userAccount.models import CustomUser

class CustomUserAdmin(admin.ModelAdmin):
    pass

admin.site.register(CustomUser, CustomUserAdmin)
