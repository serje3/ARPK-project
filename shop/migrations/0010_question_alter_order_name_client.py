# Generated by Django 4.1.2 on 2022-10-28 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0009_alter_order_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('name', models.CharField(default='Безымянный', max_length=30, verbose_name='Имя')),
                ('content', models.TextField(max_length=500, verbose_name='Содержание вопроса')),
            ],
            options={
                'verbose_name': 'вопрос',
                'verbose_name_plural': 'Вопросы',
            },
        ),
        migrations.AlterField(
            model_name='order',
            name='name_client',
            field=models.CharField(default='Безымянный', max_length=30, verbose_name='Имя клиента'),
        ),
    ]