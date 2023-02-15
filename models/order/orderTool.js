const db = require('../connection_db');

module.exports = class orderTool{

    // 尋找表中最大id 得到新增資料的id
    getOrderID(){
        return new Promise((resolve,reject) => {
            let sql = 'SELECT MAX(order_id) AS id FROM order_list';
            db.query(sql,(err,rows) => {
                if(err){
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(rows[0].id);
            })
        })
    }

    // 提取商品價格
    getProductPrice = (productID) => {
        return new Promise((resolve,reject) => {
            let sql = 'SELECT price FROM product WHERE id = ?';
            db.query(sql,productID,(err,rows) => {
                if(err){
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(rows[0].price);
            })
        })
    }

}

