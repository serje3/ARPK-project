from celery import shared_task
from django.core.mail import send_mail

from arpk_server import settings
from shop.models import Product


@shared_task
def order_created(data):
    product = Product.objects.get(id=int(data['product']))
    name = data['name_client']
    phone_number = data['phone_number']
    email = data['email']
    subject = "Создан заказ на имя {}".format(data['name_client'])
    message = "Данные заказа: \n" \
              "Товар: {}\n" \
              "Имя клиента: {}\n" \
              "Номер телефона клиента: {}\n" \
              "Электронная почта: {}\n".format(product.name,
                                               name,
                                               phone_number,
                                               email)
    # Делать асинхронно
    mail_status = send_mail(subject,
                            message,
                            settings.EMAIL_HOST_USER,
                            ['serjerin322@gmail.com']
                            )
    if mail_status:
        print('Сообщение отправлено')