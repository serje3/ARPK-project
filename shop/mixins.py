from django.http import HttpResponseForbidden, HttpResponseBadRequest

from arpk_server.captcha import check_captcha
from shop.tasks import order_created


class BaseFilterMixin:
    def filter_by_one_url_kwarg(self, queryset):
        kwarg = self.kwargs.get(self.filter_url_kwarg)
        if kwarg is not None:
            queryset = queryset.filter(**{
                self.filter_field: kwarg
            })
        return queryset

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = self.filter_by_one_url_kwarg(queryset)
        return queryset


class CategoryFilterMixin(BaseFilterMixin):
    """
    used in shop.views.SubCategoryList
    """
    filter_field = 'category_id'
    filter_url_kwarg = 'category'


class TaskPostMixin:
    def post(self, request, *args, **kwargs):
        result_post = super().post(request, *args, **kwargs)
        self.task_after_func.delay(request.data)
        return result_post


# class CheckCaptchaMixin:
#     """Yandex Smart Captcha check mixin"""
#
#     def post(self, request, *args, **kwargs):
#         if check_captcha(request):
#             return super().post(request, *args, **kwargs)
#         else:
#             return HttpResponseForbidden(content="Пожалуйста обновите страницу и пройдите captch'у заново")
#
#
# class CheckPrivacyMixin:
#     """Check if user agree with privacy document"""
#     def post(self, request, *args, **kwargs):
#         if request.data['privacy'] == 'true':
#             return super().post(request, *args, **kwargs)
#         else:
#             return HttpResponseBadRequest(content="Чтобы выполнить запрос нужно согласиться "
#                                                   "с политикой конфиденциальности")
