# commodity_manage

## 依賴環境

NodeJS-middlewares

- "dotenv": "^16.0.3"
- "express": "^4.18.2"
- "mysql": "^2.18.1" 

MySQL

- Ver 8.0.27

JavaScript
axios





## API



功能 路徑 方法 參數 結果

| 功能         | 路徑                  | 方法   | 請求參數                                                     | 響應結果     |
| ------------ | --------------------- | ------ | ------------------------------------------------------------ | ------------ |
| 取得所有訂單 | /order                | get    | *                                                            | 所有訂單資料 |
| 新增一筆訂單 | /order                | post   | req.body.memberID<br />req.body.productID<br />req.body.quantity | *            |
| 更新訂單     | /order/:oid/:mid/:pid | put    | req.body.quantity                                            | *            |
| 刪除訂單     | /order/:oid/:mid/:pid | delete | req.body.orderID<br />req.body.memberID<br />req.body.productID | *            |









