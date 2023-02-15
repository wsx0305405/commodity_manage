var express = require('express');
var router = express.Router();

// order
var Order = require('../controllers/order/with_order');

const order = new Order();



// 取得全部訂單資料
router.get('/order',order.getAllOrder);
// 訂單筆訂單
router.post('/order',order.postOrderOneProduct);
// 更新訂單資料-更新資料庫
router.put('/order/:oid/:mid/:pid',order.updateOrder);
// 刪除訂單
router.delete('/order/:oid/:mid/:pid',order.deleteOrder);

module.exports = router;