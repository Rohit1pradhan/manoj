from rest_framework.views import APIView
from django.shortcuts import render
class Home(APIView):
    def get(self,request):
        return render(request, 'home.html', {})
class Shop(APIView):
    def get(self,request):
        return render(request, 'shop.html', {})


        