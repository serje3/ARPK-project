"""arpk_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from arpk_server import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('shop.urls', namespace='shop')),
    path('api/services/', include('services.urls', namespace='services')),
    path('api/news/', include('news.urls', namespace='news'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# для nginx
# location ~* /media/.*?\.(html|txt|jpg|jpeg|gif|png|pdf|ico|css|bmp|js|swf|otf|woff|ttf|gz|svg|ogg)$ {
#     root /путь/до/папки/media;
#     expires 30m;
#     add_header Cache-Control public;
# }
