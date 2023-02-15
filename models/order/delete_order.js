const db = require('../connection_db');
const OrderTool = require('../order/orderTool');

let orderTool = new OrderTool();

module.exports = function orderDelete(deleteList){
    return new Promise(async (resolve,reject) => {
        let result = {};

        let sql = 'update order_list SET is_delete = 1 WHERE order_id = ? AND member_id = ? AND product_id = ?';
        db.query(sql,[deleteList.orderID,deleteList.memberID,deleteList.productID],function (err,rows){
            if(err){
                console.log(err);
                result.err = "伺服器錯誤 請稍後再試"
                reject(result);
                return;
            }
            result.status = "刪除訂單資料成功"
            result.deleteList = deleteList;
            resolve(result);
        })
    })   
}