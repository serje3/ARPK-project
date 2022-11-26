from shop.mixins import BaseFilterMixin


class ServiceFilterMixin(BaseFilterMixin):
    filter_field = 'service_id'
    filter_url_kwarg = 'id'
