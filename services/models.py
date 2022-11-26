from django.db import models


class Service(models.Model):
    """HELLo"""

    class Meta:
        verbose_name_plural = 'Услуги'
        verbose_name = 'услуга'

    name = models.CharField(max_length=50, verbose_name='Название')
    h2 = models.CharField(max_length=200, verbose_name='Предописание')
    description = models.TextField(verbose_name='Описание')
    display = models.BooleanField(default=False, verbose_name='Отображать на сайте?')

    def __str__(self):
        return self.name


class ServicePrice(models.Model):
    class Meta:
        verbose_name_plural = 'Цены на услуги'
        verbose_name = 'цена на услугу'

    name = models.CharField(max_length=50, verbose_name='Название')
    price = models.CharField(max_length=30, verbose_name='Стоимость')
    foreign_price = models.CharField(max_length=30, verbose_name='Стоимость для иномарок (не обяз)', null=True,
                                     blank=True)
    unit = models.CharField(max_length=10, verbose_name='Единица измерения стоимости', blank=True)
    service = models.ForeignKey('Service', on_delete=models.CASCADE, verbose_name='Услуга')

    def price_unit(self):
        return f"{self.price}{self.unit}"

    def __str__(self):
        return self.name


class ServiceImage(models.Model):
    class Meta:
        verbose_name_plural = 'Изображения для услуг'
        verbose_name = 'изображение для услуги'

    image = models.ImageField(upload_to='services/%Y/%m/%d/')
    service = models.ForeignKey('Service', on_delete=models.CASCADE, verbose_name='Услуга')


class ServiceOrder(models.Model):
    class Meta:
        verbose_name_plural = "Заказы услуг"
        verbose_name = "заказ услуг"

    email = models.EmailField(null=False)
    name = models.CharField(max_length=30, default="Безымянный", verbose_name="Имя")
    content = models.TextField(max_length=500, verbose_name="Содержание сообщения")
    service = models.CharField(max_length=100, verbose_name="Название услуги")
