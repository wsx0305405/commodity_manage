const getAllProduct = require('../../models/product/get_all_product');

module.exports = class Product {
    
    getProduct(req,res,next){
        getAllProduct().then(result => {
            res.json(result);
        },(err) => {
            res.json({
                result: err,
            })
        })
    };

}
