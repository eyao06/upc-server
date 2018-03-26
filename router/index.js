import express, { Router } from 'express';
import Product from '../models';

const router = Router();                                      // Initialize the router

router.route('/products.json')  		                          //adding the /products.json route to our router
 .get((req, res, next) => {   				                        //retrieve all products from the database
 	Product.find().lean().exec((err, products) => res.json({    //looks at our Product Schema
 		products: products.map(product => ({
      				...product, 
      	}))					                                          //responds with a json object of our database products.
 	}));
 })
 .post((req, res) => {                                        //post new product to the database
 	var product = new Product();
	product.product_name = req.body.product_name;	              //body parser lets us use the req.body
 	product.upc = req.body.upc;
	product.save((err) => {
 		if (err)
 		res.send(err);
 		res.json({ message: 'Successfully added!' });
 	});
 });

export default router;