from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from sqlalchemy import create_engine
import requests
import json

app = Flask(__name__)
api = Api(app)


class Pedido(Resource):
    pedidoCliente= ''
    cliente= ''
    direccion= ''
    telefono= ''
    estado= ''

    def get(self):
        data = {
            'pedido': Pedido.pedidoCliente,
            'cliente': Pedido.cliente,
            'estado': 'Preparando',
            'direccion': Pedido.direccion,
            'telefono': Pedido.telefono
        }
        print('Enviando estado de pedido del cliente al ESB')
        return jsonify(data)


    def post(self):     
        print('Nuevo pedido recibido mediante ESB')
        Pedido.pedidoCliente = request.json['pedido']   
        Pedido.cliente = request.json['cliente']
        Pedido.direccion = request.json['direccion']
        Pedido.telefono = request.json['telefono']
        Pedido.estado = request.json['estado']
        

        print('Enviando solicitud de entrega para Repartidor al ESB')
        #endpoint = "http://localhost:5001/repartidor"
        endpoint = "http://localhost:3000/repartidores"
        data = {
            "pedido" : Pedido.pedidoCliente,
            "cliente" :Pedido.cliente,
            "direccion" : Pedido.direccion
        }
        headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
        response = requests.post(endpoint, data=json.dumps(data),headers=headers)
        print(response.status_code)
        
        return {'status': 'Nuevo pedido recibido por el Restaurante mediante ESB.'}



api.add_resource(Pedido, '/pedidos')  # Route_1


if __name__ == '__main__':
     app.run(port='4000')