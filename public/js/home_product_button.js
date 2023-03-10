var home_product = document.getElementById('Home_Product');
        
home_product.onclick = function(){
    axios({
        method: 'get',
        url: '/product',
    }).then(products => {
        table.innerHTML = '';

        var thead = document.createElement('thead');
        table.appendChild(thead);
        var tr = document.createElement('tr');
        thead.appendChild(tr);
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = '商品名';
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = '編號';
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = '價格';
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = '數量';
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = '敘述';

        var tbody = document.createElement('tbody');
        table.appendChild(tbody);

        for(let i = 0;i < products.data.length; i++){
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            var th = document.createElement('th');
            tr.appendChild(th);
            th.innerHTML = products.data[i].name;
            var td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = products.data[i].id;
            var td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = products.data[i].price;
            var td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = products.data[i].quantity;
            var td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = products.data[i].remark;

            var td = document.createElement('td');
            tr.appendChild(td);

        }
    })
}