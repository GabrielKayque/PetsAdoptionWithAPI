from rest_framework import serializers

from .models import Pets


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pets
        fields = ("id", "name", "description", "photo")
