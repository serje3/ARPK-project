from rest_framework import serializers

from shop.models import Category, SubCategory, Product, Order, Question


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'photo', 'name', 'description', 'price', 'count', 'subcategory']
        depth = 1


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['product', 'name_client', 'phone_number', 'email']


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['email', 'name', 'content']
