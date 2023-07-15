# projectAPI<br>
A project api to showcase CURD operations, this RESTful api has implemented basic api features such as create, update, delete.<br>

## Functionalities in the API<br>
* The API can add a new product to the existing list of products.
* The API can delete a specific product.
* The API can update an existing product.
* The API can fetch all the existing products.
* API can also fetch a perticular product.<br>

## Usage<br>
The API consist of an endpoint namely, ***/api/product***,<br>
* ### To fetch all the products from the API<br>
  * Issue a **GET** request to ***https://brave-trench-coat-ant.cyclic.app/api/product***<br>
* ### To add a product in the database<br>
  * Issue a **POST** request to ***https://brave-trench-coat-ant.cyclic.app/api/product***
  * The database contains **name** and **price** of the product, which are set to ***required***.
  * In the body of the request **add a json object having name and price**.<br>
* ### To fetch a product from the database<br>
  * Issue a **GET** request to ***https://brave-trench-coat-ant.cyclic.app/api/product/id***
  * Here ***Id*** is a mongoose object.
  * To get the value of id use the **GET** request on ***https://brave-trench-coat-ant.cyclic.app/api/product***
  * Select the id of the desired product and issue a **GET** request to ***https://brave-trench-coat-ant.cyclic.app/api/product/id*** to get details of that product.<br>
* ### To update a product in the database<br>
  * Issue a **PATCH** request to ***https://brave-trench-coat-ant.cyclic.app/api/product/id***
  * Add the parameters( i.e., name or price) to be updated in the body.<br>
* ### To delete a product in the database<br>
  * Issue a **DELETE** request to ***https://brave-trench-coat-ant.cyclic.app/api/product/id***<br>
