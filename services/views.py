from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from services.mixins import ServiceFilterMixin
from services.models import Service, ServiceImage, ServicePrice
from shop.permissions import PrivacyPermission, CaptchaPermission
from services.serializers import ServiceOrderSerializer, ServiceSerializer, ServiceLiteSerializer, \
    ServiceImageSerializer, ServicePriceSerializer


class ServiceOrderCreate(generics.CreateAPIView):
    serializer_class = ServiceOrderSerializer
    permission_classes = [PrivacyPermission, CaptchaPermission]


class ServiceLiteList(generics.ListAPIView):
    queryset = Service.objects.filter(display=True)
    serializer_class = ServiceLiteSerializer


class ServiceRetrieve(generics.RetrieveAPIView):
    queryset = Service.objects.filter(display=True)
    serializer_class = ServiceSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'id'


class ServiceImageList(ServiceFilterMixin, generics.ListAPIView):
    queryset = ServiceImage.objects.all()
    serializer_class = ServiceImageSerializer


class ServicePriceList(ServiceFilterMixin, generics.ListAPIView):
    queryset = ServicePrice.objects.all()
    serializer_class = ServicePriceSerializer