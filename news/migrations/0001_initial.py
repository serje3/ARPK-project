# Generated by Django 4.1.2 on 2022-11-20 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('upload_date', models.DateTimeField(auto_created=True)),
                ('header', models.CharField(max_length=200, verbose_name='Заголовок')),
                ('content', models.TextField()),
            ],
        ),
    ]