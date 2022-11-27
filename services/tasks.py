from celery import shared_task
from django.core.mail import send_mail

from arpk_server import settings


@shared_task
def service_created(data):
    service = data['service']
    name = data['name']
    email = data['email']
    content = data['content']
    subject = "Создан заказ услуги на имя {}".format(name)
    message = "Данные заказа: \n" \
              "Услуга: {}\n" \
              "Имя клиента: {}\n" \
              "Электронная почта: {}\n" \
              "Текст сообщения: {}\n".format(service,
                                             name,
                                             email,
                                             content)
    # Делать асинхронно
    mail_status = send_mail(subject,
                            message,
                            settings.EMAIL_HOST_USER,
                            [settings.EMAIL_SERVICE_RECIPIENT]
                            )
    if mail_status:
        print('Сообщение отправлено')
