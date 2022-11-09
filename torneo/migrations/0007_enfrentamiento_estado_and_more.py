# Generated by Django 4.1 on 2022-11-09 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('torneo', '0006_enfrentamiento_categoria'),
    ]

    operations = [
        migrations.AddField(
            model_name='enfrentamiento',
            name='estado',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='enfrentamiento',
            name='fecha_enfrentamiento',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
