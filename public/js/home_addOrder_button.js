var home_addorder = document.getElementById('Home_AddOrder');

        home_addorder.onclick = function(){
            table.innerHTML = '';

            var div = document.createElement('div');
            div.className = 'col-6';
            table.appendChild(div);

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
            div.appendChild(label);
            div.appendChild(input);
            
            var div = document.createElement('div');
            div.className = 'col-6';
            table.appendChild(div);
            var label = document.createElement('label');
            label.className = 'form-label';
            label.innerText = ' productID ';
            var input = document.createElement('input');
            input.id = 'product_id';
            input.type = 'text';
            input.className = 'form-control';
            input.name = 'pid';
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
            div.appendChild(label);
            div.appendChild(input);

            var submit_post = document.createElement('button');
            submit_post.id = 'order_submit_post';
            submit_post.innerHTML = 'submit'
            
            table.appendChild(submit_post);

            submit_post.onclick = async function(){
                    await axios({
                    method: 'post',
                    url: '/order',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: {
                        memberID: document.getElementById('member_id').value,
                        productID: document.getElementById('product_id').value,
                        quantity: document.getElementById('quantity').value,
                    }
                });
                table.innerHTML = '添加訂單成功';
            }
        }