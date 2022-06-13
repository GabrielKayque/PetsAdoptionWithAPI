from rest_framework import serializers

from .models import Adoption
from pet.serializers import PetSerializer
from pet.models import Pets


class AdoptionSerializer(serializers.ModelSerializer):
    pet = PetSerializer(many=False, read_only=True)
    pet_id = serializers.PrimaryKeyRelatedField(
        many=False, write_only=True, queryset=Pets.objects.all()
    )

    class Meta:
        model = Adoption
        fields = ("id", "email", "value", "pet", "pet_id")

    def create(self, validated_data):
        validated_data["pet"] = validated_data.pop("pet_id")
        return super().create(validated_data)

    def validate_value(self, value):
        minDonateValue = 5
        maxDonateValue = 100

        if value < minDonateValue:
            raise serializers.ValidationError(
                f"It Should be Greater than {minDonateValue}"
            )
        if value > maxDonateValue:
            raise serializers.ValidationError(
                f"It Should be Less than {maxDonateValue}"
            )
        return value
