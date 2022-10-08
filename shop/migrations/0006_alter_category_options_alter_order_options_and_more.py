# Generated by Django 4.1.2 on 2022-10-07 14:24

from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_alter_category_name_alter_order_name_client'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'категорию', 'verbose_name_plural': 'Категории товаров'},
        ),
        migrations.AlterModelOptions(
            name='order',
            options={'verbose_name': 'заказ', 'verbose_name_plural': 'Заказы'},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name': 'товар', 'verbose_name_plural': 'Товары'},
        ),
        migrations.AlterModelOptions(
            name='subcategory',
            options={'verbose_name': 'подкатегорию', 'verbose_name_plural': 'Подкатегории товаров'},
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=30, unique=True, verbose_name='Название'),
        ),
        migrations.AlterField(
            model_name='order',
            name='date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Дата заказа'),
        ),
        migrations.AlterField(
            model_name='order',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, verbose_name='Номер телефона'),
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='product',
            name='display',
            field=models.BooleanField(verbose_name='Отображается на сайте?'),
        ),
        migrations.AlterField(
            model_name='product',
            name='photo',
            field=models.ImageField(upload_to='', verbose_name='Изображение товара'),
        ),
        migrations.AlterField(
            model_name='product',
            name='subcategory',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='shop.subcategory', verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='subcategory',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.category', verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='subcategory',
            name='name',
            field=models.CharField(max_length=30, verbose_name='Название'),
        ),
    ]
