from flask import Flask, render_template


templateRunner = Flask(__name__)

@templateRunner.route('/')
def index():
    return render_template('index.html', name='World')