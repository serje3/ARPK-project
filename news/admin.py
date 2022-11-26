from django.contrib import admin

# Register your models here.
from news.models import Posts, PostImage


@admin.register(Posts)
class PostsAdmin(admin.ModelAdmin):
    pass


@admin.register(PostImage)
class PostImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'image', 'post')
    list_filter = ('post', )
    sortable_by = ('post', )
