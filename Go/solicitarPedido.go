package main

import (
  "fmt"
  "io/ioutil"
  "log"
  "net/http"
  "encoding/json"
  "bytes"
)

type PedidoCliente struct {
	Pedido string `json:"pedido"`
	Cliente string `json:"cliente"`
	Direccion string `json:"direccion"`
	Telefono string `json:"telefono"`
	Estado string `json:"estado"`
}


func httpExamplePostJson() {
	fmt.Println("--- Solicitando pedido al restaurante ---")

	body := &PedidoCliente{
         Pedido : "Pizza Pepperonni",
         Cliente:"Otto Guarchaj",
         Direccion: "Zona 8 Mixco",
         Telefono: "46638340",
         Estado: "Iniciado",
	}


	pedidoJson, err := json.Marshal(body)
	if err != nil {
		log.Fatalln(err)
	}

	//resp, err := http.Post("http://localhost:5000/pedidos", "application/json", bytes.NewBuffer(pedidoJson))
	resp, err := http.Post("http://localhost:3000/pedidos", "application/json", bytes.NewBuffer(pedidoJson))
	if err != nil {
		log.Fatalln(err)
	}

	data, _ := ioutil.ReadAll(resp.Body)
	fmt.Println(string(data))
}

func main() {
	httpExamplePostJson()
}