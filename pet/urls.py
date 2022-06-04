from django.urls import path

from .views import PetsList

urlpatterns = [
    path('', PetsList.as_view())
]