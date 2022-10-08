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
