# Generated by Django 4.0.4 on 2022-06-04 00:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pet', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Pet',
            new_name='Pets',
        ),
    ]
