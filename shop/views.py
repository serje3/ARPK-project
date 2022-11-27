from rest_framework import generics

from shop.mixins import CategoryFilterMixin, TaskPostMixin
from shop.models import Category, SubCategory, Product
from shop.permissions import PrivacyPermission, CaptchaPermission
from shop.serializers import CategorySerializer, SubCategorySerializer, ProductSerializer, OrderSerializer, \
    QuestionSerializer
from shop.tasks import order_created, question_created


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.order_by('name')
    serializer_class = CategorySerializer


class SubCategoryList(CategoryFilterMixin, generics.ListAPIView):
    """
    Filtered by Category field
    url kwarg "category"
    """
    queryset = SubCategory.objects.order_by('name')
    serializer_class = SubCategorySerializer


class ProductList(generics.ListAPIView):
    queryset = Product.objects.filter(display=True)
    serializer_class = ProductSerializer
    filterset_fields = ['subcategory', ]


class ProductRetrieve(generics.RetrieveAPIView):
    queryset = Product.objects.filter(display=True)
    serializer_class = ProductSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'id'


class OrderCreate(TaskPostMixin, generics.CreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [PrivacyPermission, CaptchaPermission]
    task_after_func = order_created


class QuestionCreate(TaskPostMixin, generics.CreateAPIView):
    serializer_class = QuestionSerializer
    permission_classes = [PrivacyPermission, CaptchaPermission]
    task_after_func = question_created
