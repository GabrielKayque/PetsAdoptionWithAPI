from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Pets
from .serializers import PetSerializer


class PetsList(APIView):
    def get(self, request, format=None):
        pets = Pets.objects.all()
        serializers = PetSerializer(pets, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
