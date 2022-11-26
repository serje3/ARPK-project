from rest_framework.serializers import ModelSerializer

from news.models import Posts, PostImage


class PostSerializer(ModelSerializer):
    class Meta:
        model = Posts
        fields = ['id', 'header', 'content', 'formatted_date']


class PostImageSerializer(ModelSerializer):
    class Meta:
        model = PostImage
        fields = ['id', 'image', 'post']
