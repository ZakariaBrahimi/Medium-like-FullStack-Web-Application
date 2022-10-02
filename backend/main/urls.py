from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.http import HttpResponse
import requests
from django.shortcuts import render, redirect
from dj_rest_auth.registration.views import VerifyEmailView

"""from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.registration.views import RegisterView
from rest_framework import serializers"""

"""class CustomRegisterSerializer(RegisterSerializer):
    firstname = serializers.CharField(
        max_length=50,
        min_length=5,
    )
    lastname = serializers.CharField(
        max_length=50,
        min_length=5,
    )
    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
            'firstname': self.validated_data.get('firstname', ''),
            'lastname': self.validated_data.get('lastname', ''),
        }
    def save(self, request):
        user = super().save(request)
        user.firstname = self.data.get('firstname')
        user.lastname = self.data.get('lastname')
        user.save()
        return user

class CustomRegisterView(RegisterView):
    serializer_class = CustomRegisterSerializer"""

class PasswordResetConfirmTemplateView(TemplateView):
    template_name='password_reset_confirm.html'
    def post(self,request, *args, **kwargs):
        r = requests.post('http://127.0.0.1:8000/auth/password/reset/confirm/', data={'uid': kwargs['uidb64'], 'token': kwargs['token'], 'new_password1':request.POST['password1'], 'new_password2':request.POST['password2']})
        print(r.text)
        #requests.post('http://127.0.0.1:3000/', data=r.text)
        return redirect('http://127.0.0.1:3000/')

class AccountConfirmEmailTemplateView(TemplateView):
    template_name='verify_email.html'
    print('AccountConfirmEmailTemplateView')
    def get(self,request, *args, **kwargs):
        print(kwargs['key'])
        r = requests.post('http://127.0.0.1:8000/auth/registration/verify-email/', data={'key': kwargs['key']})
        return render(request, self.template_name, {})
    
urlpatterns = [
    #path('', CustomRegisterView.as_view(), name='rest_register'),
    # this url is used to generate email content
    
    path('auth/password-reset/confirm/',
        TemplateView.as_view(template_name="password_reset_confirm.html"),
        name='password-reset-confirm'),
    re_path(r'^password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,32})/$',
        PasswordResetConfirmTemplateView.as_view(template_name="password_reset_confirm.html"),
        name='password_reset_confirm'),
    path('admin/', admin.site.urls),
    path('api/', include('medium.api.urls')),
    #path('auth/', include('rest_framework.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
     
    path('auth/account-confirm-email/', VerifyEmailView.as_view(), name='account_email_verification_sent'), #TODO: What's the functionality of this email, it's the same -> http://127.0.0.1:8000/auth/account-confirm-email/ == http://127.0.0.1:8000/auth/registration/verify-email/
    re_path(
        r'^account-confirm-email/(?P<key>[-:\w]+)/$', AccountConfirmEmailTemplateView.as_view()
        ,name='account_confirm_email',
    ),
]
