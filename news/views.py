from django.shortcuts import render
from rest_framework import generics

# Create your views here.
from rest_framework.pagination import PageNumberPagination

from news.mixins import PostFilterMixin
from news.models import Posts, PostImage
from news.serializers import PostSerializer, PostImageSerializer

PageNumberPagination.page_size_query_param = 'page_size'


class PostList(generics.ListAPIView):
    queryset = Posts.objects.order_by('-upload_date')
    serializer_class = PostSerializer
    pagination_class = PageNumberPagination


class PostRetrieve(generics.RetrieveAPIView):
    queryset = Posts.objects.order_by('-upload_date')
    serializer_class = PostSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'id'


class PostImageList(PostFilterMixin, generics.ListAPIView):
    queryset = PostImage.objects.all()
    serializer_class = PostImageSerializer
