var express = require('express');
var router = express.Router();

var Order = require('../controllers/order/with_order');

const order = new Order();

// 取得全部訂單資料
router.get('/order',order.getOrder);
// 訂單筆訂單
router.post('/order',order.postOrderOneProduct);
// 更新訂單資料
router.put('/order',order.updateOrder);
// 刪除訂單
router.delete('/order',order.deleteOrder);

module.exports = router;