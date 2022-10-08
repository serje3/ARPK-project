import django_filters.rest_framework
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics

from shop.mixins import CategoryFilterMixin
from shop.models import Category, SubCategory, Product, Order
from shop.serializers import CategorySerializer, SubCategorySerializer, ProductSerializer, OrderSerializer


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class SubCategoryList(CategoryFilterMixin, generics.ListAPIView):
    """
    Filtered by Category field
    url kwarg "category"
    """
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer


class ProductList(generics.ListAPIView):
    queryset = Product.objects.filter(display=True)
    serializer_class = ProductSerializer
    filterset_fields = ['subcategory', ]


class OrderCreate(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
