from django.urls import path

from services.views import ServiceOrderCreate, ServiceLiteList, ServiceRetrieve, ServiceImageList, ServicePriceList

urlpatterns = [
    path('', ServiceLiteList.as_view()),
    path('<int:id>/', ServiceRetrieve.as_view()),
    path('images/<int:id>', ServiceImageList.as_view()),
    path('prices/<int:id>', ServicePriceList.as_view()),
    path('order/', ServiceOrderCreate.as_view())
]

app_name = 'services'
