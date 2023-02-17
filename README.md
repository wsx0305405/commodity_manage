# commodity_manage



## 依賴環境

Node.js_package

- "cors": "^2.8.5",
- "dotenv": "^16.0.3"
- "express": "^4.18.2"
- "mysql": "^2.18.1" 



#### 資料庫

MySQL

- Ver 8.0.27



#### 其他技術

JavaScript

- 根據資料庫的數據動態創建表格及表單
- 實現在網頁區塊中的跳轉 以ajax的方式進行操作

axios

- 用於發送不同請求方式



## API



| 功能         | 路徑     | 方法   | 請求參數                                                     | 響應結果     |
| ------------ | -------- | ------ | ------------------------------------------------------------ | ------------ |
| 取得所有訂單 | /order   | get    | *                                                            | 所有訂單資料 |
| 新增一筆訂單 | /order   | post   | req.body.memberID<br />req.body.productID<br />req.body.quantity | *            |
| 更新訂單     | /order   | put    | req.body.quantity                                            | *            |
| 刪除訂單     | /order   | delete | req.body.orderID<br />req.body.memberID<br />req.body.productID | *            |
| 取得所有產品 | /product | get    | *                                                            | 所有產品資料 |



## 資料庫結構

member

| id      | name    | email   | password | img      | img_name | create_date | update_date |
| ------- | ------- | ------- | -------- | -------- | -------- | ----------- | ----------- |
| int(PK) | varchar | varchar | varchar  | longblob | varchar  | datetime    | datetime    |

product

| id      | name    | price   | quantity | img      | img_name | remark  | create_date | update_date |
| ------- | ------- | ------- | -------- | -------- | -------- | ------- | ----------- | ----------- |
| int(PK) | varchar | decimal | int      | longblob | varchar  | varchar | datetime    | datetime    |

order_list

| order_id | customer_id | product_id | order_quantity | order_price | is_complete | create_date | update_date | is_delete |
| -------- | ----------- | ---------- | -------------- | ----------- | ----------- | ----------- | ----------- | --------- |
| int(PK)  | int(PK,FK)  | int(PK,FK) | int            | decimal     | int         | datetime    | datetime    | int       |





