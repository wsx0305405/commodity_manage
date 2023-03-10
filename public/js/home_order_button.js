var home_order = document.getElementById('Home_Order');

        home_order.onclick = function(){
            axios({
                method: 'get',
                url: '/order',
            }).then(response => {
                table.innerHTML = '';
                var thead = document.createElement('thead');
                table.appendChild(thead);
                var tr = document.createElement('tr');
                thead.appendChild(tr);
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = '*';
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = '訂單編號';
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = '會員編號';
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = '產品編號';
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = '數量';
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = '價格';
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = 'Action';

                var tbody = document.createElement('tbody');
                table.appendChild(tbody);
                
                for(let i = 0;i < response.data.length; i++){
                    var tr = document.createElement('tr');
                    tbody.appendChild(tr);
                    var th = document.createElement('th');
                    tr.appendChild(th);
                    th.innerHTML = '訂單' + (i+1);
                    var td = document.createElement('td');
                    tr.appendChild(td);
                    td.innerHTML = response.data[i].order_id;
                    var td = document.createElement('td');
                    tr.appendChild(td);
                    td.innerHTML = response.data[i].member_id;
                    var td = document.createElement('td');
                    tr.appendChild(td);
                    td.innerHTML = response.data[i].product_id;
                    var td = document.createElement('td');
                    tr.appendChild(td);
                    td.innerHTML = response.data[i].order_quantity;
                    var td = document.createElement('td');
                    tr.appendChild(td);
                    td.innerHTML = response.data[i].order_price;

                    var td = document.createElement('td');
                    tr.appendChild(td);

                    var edit_button = document.createElement('button');
                    edit_button.id = 'order_edit_page';
                    edit_button.innerHTML = 'edit';

                    edit_button.onclick = async function(){
                        table.innerHTML = '';

                        var div = document.createElement('div');
                        div.className = 'col-6';
                        table.appendChild(div);

                        var label = document.createElement('label');
                        label.className = 'form-label';
                        label.innerText = ' order_id ';
                        var input = document.createElement('input');
                        input.id = 'order_id';
                        input.type = 'text';
                        input.className = 'form-control';
                        input.name = 'oid';
                        input.value = response.data[i].order_id;
                        input.disabled = 'true';

                        div.appendChild(label);
                        div.appendChild(input);

                        var div = document.createElement('div');
                        div.className = 'col-6';
                        table.appendChild(div);

                        var label = document.createElement('label');
                        label.className = 'form-label';
                        label.innerText = ' member_id ';
                        var input = document.createElement('input');
                        input.id = 'member_id';
                        input.type = 'text';
                        input.className = 'form-control';
                        input.name = 'mid';
                        input.value = response.data[i].member_id;
                        input.disabled = 'true';

                        div.appendChild(label);
                        div.appendChild(input);

                        var div = document.createElement('div');
                        div.className = 'col-6';
                        table.appendChild(div);

                        var label = document.createElement('label');
                        label.className = 'form-label';
                        label.innerText = ' product_id ';
                        var input = document.createElement('input');
                        input.id = 'product_id';
                        input.type = 'text';
                        input.className = 'form-control';
                        input.name = 'pid';
                        input.value = response.data[i].product_id;

                        div.appendChild(label);
                        div.appendChild(input);

                        var div = document.createElement('div');
                        div.className = 'col-6';
                        table.appendChild(div);

                        var label = document.createElement('label');
                        label.className = 'form-label';
                        label.innerText = ' quantity ';
                        var input = document.createElement('input');
                        input.id = 'quantity';
                        input.type = 'text';
                        input.className = 'form-control';
                        input.name = 'quantity';
                        input.value = response.data[i].order_quantity;
                        input.disabled;

                        div.appendChild(label);
                        div.appendChild(input);

                        var update = document.createElement('button');
                        update.id = 'order_update_submit';
                        update.innerHTML = 'update';

                        table.appendChild(update);

                        update.onclick = async function(){
                            await axios({
                                method: 'put',
                                url: '/order',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                },
                                data: {
                                    orderID: document.getElementById('order_id').value,
                                    memberID: document.getElementById('member_id').value,
                                    productID: document.getElementById('product_id').value,
                                    quantity: document.getElementById('quantity').value,
                                }
                            });
                            table.innerHTML = '更新資料完成';
                        }
                    }


                    var del_button = document.createElement('button');
                    del_button.innerHTML = 'delete';

                    del_button.onclick = async function(){
                        await axios({
                            method: 'delete',
                            url: '/order',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            data: {
                                orderID: response.data[i].order_id,
                                memberID: response.data[i].member_id,
                                productID: response.data[i].product_id, 
                            }
                        });
                        table.innerHTML = '刪除資料成功';
                    }
                    td.appendChild(edit_button);
                    td.appendChild(del_button);
                
                }
            })
        }