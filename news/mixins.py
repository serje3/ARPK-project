from shop.mixins import BaseFilterMixin


class PostFilterMixin(BaseFilterMixin):
    filter_field = 'post_id'
    filter_url_kwarg = 'id'
