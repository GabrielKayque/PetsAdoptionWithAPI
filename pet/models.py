from django.db import models

# Create your models here.
class Pets(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    photo = models.URLField()
