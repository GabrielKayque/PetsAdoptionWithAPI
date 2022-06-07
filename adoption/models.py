from django.db import models


class Adoption(models.Model):
    value = models.DecimalField(max_digits=5, decimal_places=2)
    email = models.EmailField(max_length=255)
    pet = models.ForeignKey(to="pet.Pets", on_delete=models.CASCADE)
