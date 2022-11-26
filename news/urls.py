from django.urls import path

from news.views import PostList, PostRetrieve, PostImageList

urlpatterns = [
    path('', PostList.as_view()),
    path('post/<int:id>', PostRetrieve.as_view()),
    path('post/<int:id>/images', PostImageList.as_view()),
]

app_name = 'news'
