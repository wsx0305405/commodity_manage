const db = require('../connection_db');
const OrderTool = require('../order/orderTool');

let orderTool = new OrderTool();

module.exports = function postOneOrder(orderList){
    let result = {};
    return new Promise(async (resolve,reject) => {
        const price = await orderTool.getProductPrice(orderList.productID);
        const orderID = await orderTool.getOrderID() + 1;

        const addOrderList = {
            order_id: orderID,
            member_id: orderList.memberID,
            product_id: orderList.productID,
            order_quantity: orderList.quantity,
            order_price: orderList.quantity * price,
            order_date: orderList.createDate,
        }
        
        let sql = 'INSERT INTO order_list SET ?';
        db.query(sql,addOrderList,(err,rows) => {
            if(err){
                console.log(err);
                result.status = "新增單筆訂單資料失敗"
                result.err = "伺服器錯誤 請稍後再試"
                reject(result);
                return;
            }
            result.status = "新增單筆訂單資料成功";
            result.addOrderList = addOrderList;
            resolve(result);
        });
    })
}
