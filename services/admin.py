from django.contrib import admin

# Register your models here.
from services.models import ServiceOrder, ServicePrice, ServiceImage, Service


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'h2', 'display')
    fieldsets = (
        (None, {
            'fields': ('name', 'h2', 'description', 'display'),
            'description': 'После сохранения эта услуга будет отображаться на сайте, если будет поставлена галочка на '
                           '"Отображать на сайте?" <br>Пример:<br><br>'
                           'Название: Ремонт актуатора турбины<br><br> '
                           'Предописание: Мы предлагаем быструю и самое главное качественную диагностику дизельных' +
                           ' форсунок.<br><br> Описание: Ремонт актуатора турбины подробнее'
        }),
    )


@admin.register(ServiceOrder)
class ServiceOrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'service', 'name')


@admin.register(ServicePrice)
class ServicePriceAdmin(admin.ModelAdmin):
    list_display = ('name', 'service', 'price_unit')
    sortable_by = ('service',)
    list_filter = ('service',)


@admin.register(ServiceImage)
class ServiceImageAdmin(admin.ModelAdmin):
    list_display = ('service', 'image')
    sortable_by = ('service',)
    list_filter = ('service',)
