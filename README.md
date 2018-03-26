# upc-server

A server for the UPC Scanning application and UPC Website

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Other parts of this project:

[upc-server](https://github.com/eyao06/upc-server)

[upc-website](https://github.com/eyao06/upc-website)

### Prerequisites

* Latest version of npm
* A computer (I used Windows)
* A Android device with 6.0 or higher
* MongoDB (Database)
* Express
* React and React-Native
* Node.js (Most Current Version)

### Installing

* Download project
* Extract project
* Make sure database is running (instructions on database below)
* Open command line in project directory
* Install dependencies
```
npm install
```
* Run server
```
npm start
```
* On your browser type in the address (http://localhost:3000/products.json) to check if the server is working

### Installing Database

#### MongoDB
 
* Download and install MongoDB 
* Make sure to download the Community Server and install the complete package
* I used the default settings for everything when installing
```
Hostname = localhost 
Port number = 27017
```
* After installation, create directory \data in the root of you main drive (mines was my C:\) and then create a folder inside \data called db
```
Should look like this:
C:\data\db
```
* To run the database run the executable mongod.exe
```
Should be located here:
C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe
```
* Make sure to run mongod.exe before starting the server

#### Populating the database using RoboMongo (I used their Studio 3T version)
*	We are going to use this to create a database on Mongo and then importing our initial data from the file products.json that is in our project root folder
* Run Studio 3T
*	Click the Connect button (make sure database is already running)
*	And then click the New Connection button on the top left
*	Then click Save (Server = localhost and port = 27017)
*	On the left pane, there should be the database port number and hostname 
*	Right click localhost:27017 and click Add Database
*	Type in “products” as the name of the database
*	Now we right click the newly added products database and click Import Collection
*	Now we add the data from the file products.json
*	To check if all went well
*	Expand the products database or double click it
*	Expand or double click Collections
*	Double click products
* The data that was on the JSON file should now present itself on the right pane



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

