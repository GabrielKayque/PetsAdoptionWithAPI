from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Adoption
from .serializers import AdoptionSerializer


class AdoptionList(APIView):
    # GET A LIST OF PEOPLE WHO ADOPTED SOME PET
    def get(self, request, format=None):
        adoption = Adoption.objects.all()
        serializer = AdoptionSerializer(adoption, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # SAVE EMAIL AND DONATION TO A SPECIFIC PET
    def post(self, request, format=None):
        serializer = AdoptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(
            {
                "errors": serializer.errors,
                "message": "Validation errors happened",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )
