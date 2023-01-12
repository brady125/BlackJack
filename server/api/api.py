from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from .utils import *


class GetCards(Resource):
    def get(self):
        return exec_get_all("SELECT * FROM deck")

class GetUsers(Resource):
    def get(self):
        return exec_get_all("SELECT * FROM players")

class CreateUser(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str)
        parser.add_argument('password', type=str)
        parser.add_argument('email', type=str)
        parser.add_argument('balance', type=int)
        args = parser.parse_args()
        username = args['username']
        password = args['password']
        email = args['email']
        balance = args['balance']
        exec_commit("INSERT INTO players (username, password, email, balance, wins) VALUES (%s, %s, %s, %s, %s)",
                    (username, password, email, balance, 0))
        exec_commit("INSERT INTO activity (username, password, email, balance, wins) VALUES (%s, %s, %s, %s, %s)", (username, password, email, balance, 0))

class CreateSampleUser(Resource):
    def post(self):
        print('Creating sample user')
        exec_commit("INSERT INTO activity (username, password, email, balance, wins) VALUES (%s, %s, %s, %s, %s)",
                    ("Faceless Client", "test", "test", 5, 0)) 
        
        
class GetRecentUser(Resource):
    def get(self):
        return exec_get_one("SELECT ROW_TO_JSON(t) FROM (SELECT * FROM activity WHERE id = (SELECT MAX(id) FROM activity)) t" )

class GetActivity(Resource):
    def get(self):
        return exec_get_all("SELECT * FROM activity")

class GetUser(Resource):
    def get(self):
        length = len(exec_get_all("SELECT * FROM players"))
        return exec_get_one("SELECT ROW_TO_JSON(t) FROM (SELECT * FROM players WHERE id = %s) t", (length,))

class Login(Resource):
    def post(self, string):
        print(string)
        player = exec_get_one("SELECT * FROM players WHERE username = %s", (string,))
        if player == None:
            player = exec_get_one("SELECT * FROM players WHERE email = %s", (string,))
            if player == None:
                return False; # no user found
            else:
                username = player[1]
                password = player[2]
                email = player[3]
                balance = player[4] + 5  # add 5 to balance
                wins = player[5]
                exec_commit("INSERT INTO activity (username, password, email, balance, wins) VALUES (%s, %s, %s, %s)", (username, password, email, balance, wins))
                return True; # user found
        else:
            username = player[1]
            password = player[2]
            email = player[3]
            balance = player[4] + 5  # add 5 to balance
            wins = player[5]
            exec_commit("INSERT INTO activity (username, password, email, balance, wins) VALUES (%s, %s, %s, %s, %s)",
                        (username, password, email, balance, wins))
            return True; # user found
