import os
import sqlitecloud

def get_db_connection():
    connection = sqlitecloud.connect('sqlitecloud://cfimk8s1nz.g5.sqlite.cloud:8860/gottahackemall?apikey=' + str(os.getenv("SQLITE")))
    connection.row_factory = sqlitecloud.Row
    return connection