const mongoose = require('mongoose');
const ProductModel = require('../Models/ProductModel');

const getAllProducts = async (req, res, next) => {
    try{
        const result = await ProductModel.find({}, {__v:0});
        res.send(result);
    }
    catch(err){
        console.error(err.message);
    }
};

const createNewProduct = async (req, res, next) => {
    try{
        const product = new ProductModel({
            name: req.body.name,
            price: req.body.price
        });
        const result = await product.save();
        res.send(result);
    }
    catch(error) {
        if(error.name === "ValidationError"){
            error.status = 422;
        }
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    try{
        const id = req.params.id;
        const result = await ProductModel.findById(id);
        if(!result) {
            const error = new Error("Not Found");
            error.status = 404;
            throw error;
        }
        res.send(result);
    }
    catch(error){
        if( error instanceof mongoose.CastError ) {
            error.message = "Invalid Id";
            error.status = 400;
            next(error);
        }
        else{ next(error); }
    }
};

const updateProductById = async (req, res, next) => {
    try{
        const id = req.params.id;
        const update = req.body;
        const result = await ProductModel.findByIdAndUpdate(id, update);
        if(!result) {
            const error = new Error("Not Found");
            error.status = 404;
            throw error;
        }
        res.send(result);
    }
    catch(error){
        if( error instanceof mongoose.CastError ) {
            error.message = "Invalid Id";
            error.status = 400;
            next(error);
        }
        else{ next(error); }
    }
};

const deleteProductById = async (req, res, next) => {
    try{
        const id = req.params.id;
        const result = await ProductModel.findByIdAndDelete(id);
        if(!result) {
            const error = new Error("Not Found");
            error.status = 404;
            throw error;
        }
        res.send(result);
    }
    catch(error){
        if( error instanceof mongoose.CastError ) {
            error.message = "Invalid Id";
            error.status = 400;
            next(error);
        }
        else{ next(error); }
    }
};

module.exports = {
    getAllProducts,
    createNewProduct,
    getProductById,
    updateProductById,
    deleteProductById
}