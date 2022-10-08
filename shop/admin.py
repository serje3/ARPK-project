from django.contrib import admin
from .models import Category, SubCategory, Product, Order


# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'subcategory', 'price', 'display')


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'product_colored', 'price', 'name_client', 'phone_number', 'email', 'date')
    list_display_links = ('id', 'product_colored')
    ordering = ['-date']


