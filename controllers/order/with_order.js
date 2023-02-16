const getAllOrder = require('../../models/order/get_all_order');
const postOneOrder = require('../../models/order/order_one_product');
const updateData = require('../../models/order/update_order');
const deleteOrderData = require('../../models/order/delete_order');

const getTime = require('../../service/getTime');

module.exports = class Order {
    // 取得全部訂單資料
    getAllOrder(req,res,next){
        getAllOrder().then(result => {
            res.json(result);
        },(err) => {
            res.json({
                result: err,
            })
        })
    }
    
    // 新增單筆訂單
    postOrderOneProduct(req,res,next){
        const orderList = {
            memberID: req.body.memberID,
            productID: req.body.productID,
            quantity: req.body.quantity,
            createDate: getTime(),
        }

        postOneOrder(orderList).then(result => {
            res.json(result);
        },(err) =>{
            res.json({
                result: err
            })
        })
    }

    // 更新訂單
    updateOrder(req,res,next){
        const updateList = {
            orderID: req.body.orderID,
            memberID: req.body.memberID,
            productID: req.body.productID,
            quantity: req.body.quantity,
            updateDate: getTime(),
        }
        updateData(updateList);
        res.redirect('/order');
    }

    // 刪除訂單
    deleteOrder(req,res,next){
        const deleteList = {
            orderID: req.body.orderID,
            memberID: req.body.memberID,
            productID: req.body.productID,
        }
        deleteOrderData(deleteList).then(result => {
            res.json(result);
        })
    }
}
