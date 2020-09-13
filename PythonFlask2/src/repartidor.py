from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from sqlalchemy import create_engine

app = Flask(__name__)
api = Api(app)


class Repartidor(Resource):
    repartidor= 'Goku Super Sayajin'
    estado= 'En camino'
    pedidoCliente= ''
    direccion= ''
    cliente= ''

    def get(self):
        data = {
            'repartidor': Repartidor.repartidor,
            'estado': Repartidor.estado
        }

        print('Enviando estado del repartidor al cliente a travez de ESB')
        return jsonify(data)


    def post(self):     
        Repartidor.pedidoCliente = request.json['pedido']   
        Repartidor.cliente = request.json['cliente']
        Repartidor.direccion = request.json['direccion']        
        
        print('Nueva solicitud de entrega de Restaurante a travez de ESB..')
        return {'status': 'Nueva solicitd de entrega recibido por el Repartidor mediante ESB.'}



api.add_resource(Repartidor, '/repartidores')  # Route_1


if __name__ == '__main__':
     app.run(port='5000')