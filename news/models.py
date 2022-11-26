from django.db import models


class Posts(models.Model):
    class Meta:
        verbose_name_plural = 'Посты'
        verbose_name = 'пост'

    header = models.CharField(max_length=200, verbose_name='Заголовок')
    content = models.TextField(verbose_name='Содержание')
    upload_date = models.DateTimeField(auto_created=True, verbose_name='Дата публикации')

    def formatted_date(self):
        return f"{self.upload_date.day}.{self.upload_date.month}.{self.upload_date.year}"

    def __str__(self):
        return self.header[:50]


class PostImage(models.Model):
    class Meta:
        verbose_name_plural = 'Изображения для постов'
        verbose_name = 'изображение для поста'

    image = models.ImageField(verbose_name='Изображение', upload_to='news/%Y/%m/%d')
    post = models.ForeignKey('Posts', on_delete=models.CASCADE, verbose_name='Пост')
