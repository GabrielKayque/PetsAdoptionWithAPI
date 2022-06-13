from django.urls import path
from .views import AdoptionList

urlpatterns = [path("", AdoptionList.as_view())]
