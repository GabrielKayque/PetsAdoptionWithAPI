from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import AdoptionSerializer


class AdoptionList(APIView):
    def post(self, request, format=None):
        serializer = AdoptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(
            {"errors": serializer.errors, "message": "Validation errors happened"},
            status=status.HTTP_400_BAD_REQUEST,
        )
