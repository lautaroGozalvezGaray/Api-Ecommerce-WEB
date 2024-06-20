# Api BackEnd Proyecto Final CoderHouse

## Ejecutar localmente

- Primero se deben instalar dependencias.

- Para levantar el proyecto por consola podemos simplemente con nodemon server.js

- Para seleccionar un puerto a eleccion nodemon server.js -p 8080 (por defecto toma el puerto 8080)

- Para ejecutar en modo CLUSTER server.js -m CLUSTER

- Para pasarle la URL de la base de datos en mongo server.js -b URL

-ACLARACION: TODAS LAS RUTAS EXCEPTO LA /CHAT DEBEN SER TESTEADAS EN POSTMAN O SIMILAR. 


# RUTAS

## Cart Rutes

- `http://localhost:8080/api/carrito`: Mediante POST permite la creacion de un carrito.

- `http://localhost:8080/api/carrito/:id`: Para eliminar el carrito. (DELETE)

- `http://localhost:8080/api/carrito/:id/products`: Permite listar los productos. (GET)

- `http://localhost:8080/api/carrito/:id/products`: Permite agreagar un producto mediante al carrito dado su ID(POST)

   ```json
    {
    "title": "",
    "price": 0000,
    "thumbnail": "",
    "categoria":""
   } 
   ```
- `http://localhost:8080/api/carrito/:id/products/:id_prod`: Permite eliminar un producto dado su ID del carrito ID(POST)

## messages Route

- `http://localhost:8080/api/chat/`: Permite utilizar el chat de socke (esta ruta renderiza un archivo .hbs)(GET)

## Order Rute

- `http://localhost:8080/api/order/send-order`: Permite enviar la orden de productos.(GET)

## Products Rutes

- `http://localhost:8080/api/products/`: Permite listar todos los productos cargados en la DB (GET)

- `http://localhost:8080/api/products/:id`: Permite consultar un producto en particular dado su ID (GET)

- `http://localhost:8080/api/products`: Permite agregar un producto(POST)

   ```json
    {
    "title": "",
    "price": 00000,
    "thumbnail": "",
    "categoria":""
   } 
   ```

- `http://localhost:8080/api/products/:id`: Permite eliminar un producto dado su ID (DELETE)

- `http://localhost:8080/api/products/:id`: Permite actualizar un producto dado su ID (PUT)

   ```json
    {
    "title": "",
    "price": 00000,
    "thumbnail": "",
    "categoria":""
   } 
   ```

- `http://localhost:8080/api/products/categoria/:categoria`: Permite listar los productos por categoria (GET)

## Session Rutes

- `http://localhost:8080/api/session/login`: Permite logearse al sistema. Primero se debe registrar en caso de no estarlo. (POST)

   ```json
    {
    "username": "",
    "password": ""
    } 
   ```

- `http://localhost:8080/api/session/register`: Permite el registrar a un nuevo usuario.(POST)

   ```json
    {
    "username": "",
    "password": "",
    "name": "",
    "age":00,
    "phone":0000000,
    "avatar":"",
    "adress":""
    } 
   ```

- `http://localhost:8080/api/session/register`: Permite cerrar la sesion del usuario. Por defecto la sesion dura 5 minutos.(GET)

## InfoAccount Rutes

- `http://localhost:8080/api/info/infoAccount`: permite ver la informacion del usuario logeado.
 