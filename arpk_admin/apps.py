from django.contrib.admin.apps import AdminConfig


class ARPKAdminConfig(AdminConfig):
    default_site = 'arpk_admin.admin.ARPKAdminSite'
