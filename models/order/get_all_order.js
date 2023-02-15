const db = require('../connection_db');

module.exports = function getAllOrderData() {
    let result = {};
    return new Promise((resolve,reject) => {
        let sql = 'SELECT * FROM order_list WHERE is_delete != 1';
        db.query(sql,(err,rows) => {
            if(err){
                console.log(err);
                result.status = "取得全部訂單資料失敗"
                result.err = "伺服器錯誤 請稍後再試"
                reject(result);
                return;
            }
            resolve(rows);
        })
    })
}


