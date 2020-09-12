const express = require("express");
const bodyParser = require('body-parser');
const request = require('request')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let pedidoCliente = {
 pedido: '',
 cliente: '',
 direccion: '',
 telefono: '',
 estado: ''
};


let repartidorRestaurante = {
 pedido: '',
 direccion: '',
 cliente: '',
 repartidor: '',
 estado: ''
};


let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};


app.get('/', function (req, res) {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Punto de inicio'
    };
    res.send(respuesta);
});



app.route('/pedidos')
    .get(function (req, res) {
        console.log("Cliente esta solicitando estado de su pedido..'");    
        if(pedidoCliente.pedido === '' || pedidoCliente.cliente === '') {
            respuesta = {
                error: true,
                codigo: 501,
                mensaje: 'El pedido no ha sido creado'
            };
        } else {

            
            console.log("Solicitando estado del pedido al Restaurante.'");  
            request('http://localhost:4000/pedidos', { json: true }, (err, res) => {
                if (err) { return console.log(err); }
                if (!err && res.statusCode == 200) {
                    console.log(res.body);
                    pedidoCliente = {
                        pedido: res.body.pedido,
                        cliente: res.body.cliente,
                        estado: res.body.estado,
                        direccion: res.body.direccion,
                        telefono: res.body.telefono                        
                    };
                    
                    respuesta = {
                        error: false,
                        codigo: 200,
                        mensaje: 'Enviando estado de pedido al cliente...',
                        respuesta: pedidoCliente
                    };
                    
                    
                }
            });
            

        }
    
    
        res.send(respuesta);
    })

    .post(function (req, res) {
        if(!req.body.pedido || !req.body.cliente) {
            respuesta = {
                error: true,
                codigo: 502,
                mensaje: 'El campo pedido y cliente son requeridos'
            };
        } else {
            console.log("Recibido nuevo pedido de cliente...'");
            
            pedidoCliente = {
                pedido: req.body.pedido,
                cliente: req.body.cliente,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                estado: req.body.estado
            };
            
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'Recibido nuevo pedido de cliente...',
                respuesta: pedidoCliente
            };
            
            
            console.log("Enviando solicitud al Restaurante...'");
            request.post('http://localhost:4000/pedidos', {
              json: {
                pedido: pedidoCliente.pedido,
                cliente: pedidoCliente.cliente,
                direccion: pedidoCliente.direccion,
                telefono: pedidoCliente.telefono,
                estado: pedidoCliente.estado
              }
            }, (error, res, body) => {
              if (error) {
                console.error(error)
                return
              }
              console.log(`statusCode: ${res.statusCode}`)
              console.log(body)
            })
            
            
        }        
        res.send(respuesta);
    });
    

 



app.route('/repartidores')
    .get(function (req, res) {
        console.log("Cliente esta solicitando estado de la entrega de su pedido...'");    
        if(repartidorRestaurante.pedido === '' || repartidorRestaurante.cliente === '' || repartidorRestaurante.direccion === '') {
            respuesta = {
                error: true,
                codigo: 501,
                mensaje: 'No hay entrega de producto solicitado'
            };
        } else {
            
            console.log("Solicitando estado al Repartaritor desde el ESB.'");  
            request('http://localhost:5000/repartidores', { json: true }, (err, res) => {
                if (err) { return console.log(err); }
                if (!err && res.statusCode == 200) {
                    console.log(res.body);
                    repartidorRestaurante = {
                        repartidor: res.body.repartidor,
                        estado: res.body.estado                      
                    };
                    
                    respuesta = {
                        error: false,
                        codigo: 200,
                        mensaje: 'Enviando estado de entrega de pedido al cliente desde el ESB...',
                        respuesta: repartidorRestaurante
                    };
                }
            });
        }
    
        res.send(respuesta);
    })


    .post(function (req, res) {
        if(!req.body.pedido || !req.body.cliente || !req.body.direccion) {
            respuesta = {
                error: true,
                codigo: 502,
                mensaje: 'El campo pedido y cliente y direccion son requeridos'
            };
        } else {
            console.log("Recibiendo nueva solicitud de entrega del restaurante mediante ESB'");
            
            repartidorRestaurante = {
                pedido: req.body.pedido,
                cliente: req.body.cliente,
                direccion: req.body.direccion,
            };
            
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'Recibido nueva solicitud de entrega de restaurante...',
                respuesta: repartidorRestaurante
            };
            
            
            console.log("Enviando solicitud de entrega a Repartidor..'");
            request.post('http://localhost:5000/repartidores', {
              json: {
                pedido: repartidorRestaurante.pedido,
                cliente: repartidorRestaurante.cliente,
                direccion: repartidorRestaurante.direccion
              }
            }, (error, res, body) => {
              if (error) {
                console.error(error)
                return
              }
              console.log(`statusCode: ${res.statusCode}`)
              console.log(body)
            })            
            
        }        
        res.send(respuesta);
    });




app.listen(3000, () => {
 console.log("Microservicio ESB está inicializado en el puerto 3000");
});

