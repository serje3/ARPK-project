from rest_framework.permissions import BasePermission

from arpk_server.captcha import check_captcha


class PrivacyPermission(BasePermission):
    """Privacy document agreement check"""
    message = "Запрос не может быть выполнен, пока пользователь не согласен с политикой конфиденциальности"

    def has_permission(self, request, view):
        return request.data['privacy'] == 'true'


class CaptchaPermission(BasePermission):
    """Yandex Smart Captcha check"""
    message = "Пожалуйста обновите страницу и пройдите captch'у заново"

    def has_permission(self, request, view):
        return check_captcha(request)
