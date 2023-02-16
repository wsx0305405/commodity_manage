# commodity_manage

## 依賴環境

NodeJS-middlewares

- "cors": "^2.8.5",
- "dotenv": "^16.0.3"
- "express": "^4.18.2"
- "mysql": "^2.18.1" 



#### 搭配資料庫

MySQL

- Ver 8.0.27



#### 其他技術

JavaScript

- 根據資料庫的數據動態創建表格及表單
- 同時實現在網頁區塊內的跳轉進行操作資料庫的功能

axios

- 用於發送不同請求方式



## API



| 功能         | 路徑   | 方法   | 請求參數                                                     | 響應結果     |
| ------------ | ------ | ------ | ------------------------------------------------------------ | ------------ |
| 取得所有訂單 | /order | get    | *                                                            | 所有訂單資料 |
| 新增一筆訂單 | /order | post   | req.body.memberID<br />req.body.productID<br />req.body.quantity | *            |
| 更新訂單     | /order | put    | req.body.quantity                                            | *            |
| 刪除訂單     | /order | delete | req.body.orderID<br />req.body.memberID<br />req.body.productID | *            |









