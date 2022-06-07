from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Pets
from .serializers import PetSerializer


class PetsList(APIView):
    # GETLIST
    def get(self, request, format=None):
        pets = Pets.objects.all()
        serializers = PetSerializer(pets, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)

    # ADD A NEW PET TO THE LIST
    def post(self, request, format=None):
        serializers = PetSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(
            {
                "errors": serializers.errors,
                "message": "Validation errors happened",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )
