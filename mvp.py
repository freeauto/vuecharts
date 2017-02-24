#!/usr/bin/env python

from main import app, load_app # @NoMove

import logging

from gevent.backdoor import BackdoorServer
from gevent.pywsgi import WSGIServer
from werkzeug.debug import DebuggedApplication

from assets import env
from com.bin.run_server import run_server
from manage import manager, get_locals
import settings


load_app()

def run_server_func():
    BackdoorServer(('127.0.0.1', settings.BACKDOOR_PORT), locals=get_locals()).start()
    WSGIServer(('0.0.0.0', settings.LOCALDEV_PORT), DebuggedApplication(app, evalex=True)).start()
    logging.info("********* Server started: port=%s backdoor=%s IS_LIKE_PROD=%s",
                 settings.LOCALDEV_PORT, settings.BACKDOOR_PORT, settings.IS_LIKE_PROD)
    env.watch_asset_changes()


if __name__ == '__main__':
    run_server(run_server_func, manager)
