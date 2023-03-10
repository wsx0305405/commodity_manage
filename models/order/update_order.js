const db = require('../connection_db');
const OrderTool = require('../order/orderTool');

let orderTool = new OrderTool();

module.exports = function orderUpdate(updateList){
    let result = {};
    return new Promise(async (resolve,reject) => {
        const price = await orderTool.getProductPrice(updateList.productID);
        const orderPrice = updateList.quantity * price;

        let sql = 'UPDATE order_list SET order_quantity = ?, order_price = ?, update_date = ?, product_id = ? WHERE order_id = ? AND member_id = ?';
        console.log(updateList);
        await db.query(sql,[updateList.quantity,orderPrice,updateList.updateDate,updateList.productID,updateList.orderID,updateList.memberID],(err,rows) => {
            if(err){
                console.log(err);
                result.status = "更新訂單資料失敗";
                result.err = "伺服器錯誤 請稍後再試";
                reject(result);
                return;
            }
            resolve(rows);
        })
    })
}
