package main

import (
  "fmt"
  "io/ioutil"
  "log"
  "net/http"
)


func httpExampleGetJson() {
	fmt.Println("--- Solicitando estado del pedido al restaurante ---")

	//resp, err := http.Get("http://localhost:5001/repartidor")
	resp, err := http.Get("http://localhost:3000/repartidores")
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	//print json body
	contents, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(contents))
}

func main() {
  // http get
  httpExampleGetJson()
}