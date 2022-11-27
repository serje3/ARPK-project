import json
import sys

import requests

from arpk_server.settings import SMARTCAPTCHA_SERVER_KEY


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def check_captcha(request):
    token = request.data['smart-token']
    resp = requests.get(
        "https://captcha-api.yandex.ru/validate",
        {
            "secret": SMARTCAPTCHA_SERVER_KEY,
            "token": token,
            "ip": get_client_ip(request)  # Нужно передать IP пользователя.
            # Как правильно получить IP зависит от вашего фреймворка и прокси.
            # Например, в Flask это может быть request.remote_addr
        },
        timeout=1
    )
    server_output = resp.content.decode()
    if resp.status_code != 200:
        print(f"Allow access due to an error: code={resp.status_code}; message={server_output}", file=sys.stderr)
        return True
    return json.loads(server_output)["status"] == "ok"
