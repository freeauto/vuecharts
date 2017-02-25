from datetime import datetime, timedelta # @UnusedImport
import logging # @UnusedImport

from flask import abort, render_template, redirect, url_for, request, make_response, jsonify, flash # @UnusedImport
from flask_login import current_user # @UnusedImport
from flask_wtf import Form # @UnusedImport
from wtforms import validators as val # @UnusedImport

from database import db # @UnusedImport
from main import app
from models import * # @UnusedWildImport
import wtforms as wtf # @UnusedImport
import random


@app.route('/')
def home_view():
    return render_template('home.html')

@app.route('/api/user')
def user_api():
    LEN = 10
    dates = []
    t = datetime.now()
    for i in range(LEN):
        t -= timedelta(days=7)
        dates.append(t.strftime('%m/%d'))
    random.uniform(1, 5)
    return jsonify(dates=dates)
