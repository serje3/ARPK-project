celery:
    celery -A arpk_server worker --loglevel=info -P eventlet