from flask import Flask, session, render_template, request, redirect, url_for
from flaskext.mysql import MySQL
import os


# mysql = MySQL()
app = Flask(__name__)

# app.config['MYSQL_DATABASE_USER'] = 'root'
# app.config['MYSQL_DATABASE_PASSWORD'] = '0000'
# app.config['MYSQL_DATABASE_DB'] = 'music'
# app.config['MYSQL_DATABASE_HOST'] = 'localhost'

# mysql.init_app(app)

@app.route("/", methods=['POST', 'GET'])
def index():
    if request.method == "POST":
        # f = request.files['audio_data']
        # with open('audio.wav', 'wb') as audio:
        #     print('오디오', audio)
        #     f.save(audio)
        # print('file uploaded successfully')

        return render_template('MelodyTest.html', request="POST")
    else:
        return render_template("MelodyTest.html")

if __name__ == '__main__':
    app.run(host=os.getenv('IP', '0.0.0.0'), port=int(os.getenv('PORT', 8000)), debug=True, use_reloader=False)
