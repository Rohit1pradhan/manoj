from rest_framework.routers import DefaultRouter
from .views import  *
rout = DefaultRouter()

rout.register('products',ProductViews,basename='products')

from manoj.views import *

urlpatterns = rout.urls + [
]
