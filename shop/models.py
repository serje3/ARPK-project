from django.contrib import admin
from django.db import models
from django.utils.html import format_html
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.
class Category(models.Model):
    class Meta:
        verbose_name_plural = "Категории товаров"
        verbose_name = "категорию"

    name = models.CharField(max_length=30, unique=True, verbose_name="Название")

    def __str__(self):
        return self.name


class SubCategory(models.Model):
    class Meta:
        verbose_name_plural = "Подкатегории товаров"
        verbose_name = "подкатегорию"

    name = models.CharField(max_length=30, verbose_name="Название")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="Категория")

    def __str__(self):
        return f"{self.name} - {self.category}"


class Product(models.Model):
    class Meta:
        verbose_name_plural = "Товары"
        verbose_name = "товар"

    name = models.CharField(max_length=100, db_index=True, verbose_name="Название товара")
    description = models.TextField(verbose_name="Описание")
    price = models.PositiveIntegerField(verbose_name="Цена")
    photo = models.ImageField(upload_to='product/%Y/%m/%d/', verbose_name="Изображение товара")
    subcategory = models.ForeignKey(SubCategory, on_delete=models.SET_NULL, null=True, db_index=True,
                                    verbose_name="Категория")
    count = models.PositiveIntegerField(verbose_name="Количество")
    display = models.BooleanField(verbose_name="Отображается на сайте?")

    def __str__(self):
        return self.name


class Order(models.Model):
    class Meta:
        verbose_name_plural = "Заказы"
        verbose_name = "заказ"

    product = models.ForeignKey(Product, on_delete=models.RESTRICT, null=True, verbose_name="Товар")
    name_client = models.CharField(max_length=20, default="Безымянный", verbose_name="Имя клиента")
    phone_number = PhoneNumberField(verbose_name='Номер телефона')
    email = models.EmailField(null=True)
    date = models.DateTimeField(auto_now_add=True, verbose_name='Дата заказа')

    @admin.display(description='Цена')
    def price(self):
        return format_html('{} ₽', self.product.price)

    @admin.display(description="Товар")
    def product_colored(self):
        color = ""
        if not self.product.display:
            color = "#ff033e"
        return format_html(
            'ID:{}<span style="color: {};"> {}</span>',
            self.product_id,
            color,
            self.product
        )

    def __str__(self):
        return f"{self.id} - {self.product.name}"[:30]
