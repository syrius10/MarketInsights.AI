import pandas as pd
from flask import Flask, jsonify, request
from sqlalchemy import create_engine

app = Flask(__name__)

class BusinessIntelligence:
    def __init__(self, db_uri):
        self.engine = create_engine(db_uri)

    def query(self, sql):
        return pd.read_sql(sql, self.engine)

bi_tool = BusinessIntelligence(db_uri='postgresql://user:password@localhost/bi_db')

@app.route('/bi/query', methods=['POST'])
def execute_query():
    sql = request.json.get('sql')
    result = bi_tool.query(sql)
    return jsonify(result.to_dict(orient='records'))