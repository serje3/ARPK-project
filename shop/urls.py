from django.urls import path

from shop.views import ProductList, CategoryList, SubCategoryList, OrderCreate

urlpatterns = [
    path('products/', ProductList.as_view()),
    path('category/', CategoryList.as_view()),
    path('category/<int:category>', SubCategoryList.as_view()),
    path('orders/', OrderCreate.as_view())
]

app_name = 'shop'
