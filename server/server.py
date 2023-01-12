from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

from api.utils import *
from api.api import *

app = Flask(__name__) #create Flask instance
CORS(app) #Enable CORS on Flask server to work with Nodejs pages
api = Api(app) #api router

# HTTP Methods
api.add_resource(GetCards, '/') #GET
api.add_resource(GetUsers, '/getUsers') #GET
api.add_resource(GetUser, '/getUser') #GET
api.add_resource(Login, '/login/<string:string>') #POST
api.add_resource(CreateSampleUser, '/login/sampleUser') #POST
api.add_resource(GetRecentUser, '/login/recentUser') #GET
api.add_resource(CreateUser, '/createUser') #POST
api.add_resource(GetActivity, '/getActivity') #GET
if __name__ == '__main__':
    print("Loading db")
    exec_sql_file('data.sql')
    print("Starting flask")
    app.debug = True
    app.run(debug=True), #starts Flask



    