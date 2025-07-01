 var product_id = document.getElementById("product-id");
    var product_name = document.getElementById("product-name");
    var product_price = document.getElementById("product-price");

    const products = [];

    const table = document.getElementById("table1");

    function initialRender() {
      table.innerHTML = "";
      let th_row = document.createElement("tr");

      let th1 = document.createElement("th");
      let th2 = document.createElement("th");
      let th3 = document.createElement("th");

      th1.innerText = "Product Id";
      th2.innerText = "Product Name";
      th3.innerText = "Product Price";

      th_row.appendChild(th1);
      th_row.appendChild(th2);
      th_row.appendChild(th3);

      table.appendChild(th_row);
    }

    function showProducts(productsList) {
      initialRender();

      if (productsList.length === 0) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 3;
        td.innerText = "No Data Found.";
        tr.appendChild(td);
        table.appendChild(tr);
      } else {
        for (let i = 0; i < productsList.length; i++) {
          const product = productsList[i];
          const tr = document.createElement("tr");

          const td1 = document.createElement("td");
          td1.innerText = product.product_id;

          const td2 = document.createElement("td");
          td2.innerText = product.product_name;

          const td3 = document.createElement("td");
          td3.innerText = product.product_price;

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);

          table.appendChild(tr);
        }
      }
    }

    function lowToHigh() {
      const sorted = products.slice().sort((a, b) => a.product_price - b.product_price);
      showProducts(sorted);
    }

    function highToLow() {
      const sorted = products.slice().sort((a, b) => b.product_price - a.product_price);
      showProducts(sorted);
    }

    function reset() {
      showProducts(products);
    }

    function addList() {
      var productId = product_id.value.trim();
      var productName = product_name.value.trim();
      var productPrice = product_price.value.trim();

      if (!productId || !productName || !productPrice) {
        alert("Please fill in all fields.");
        return;
      }

      let obj = {
        product_id: productId,
        product_name: productName,
        product_price: Number(productPrice)
      };

      products.push(obj);
      reset();

      // Clear input fields
      product_id.value = "";
      product_name.value = "";
      product_price.value = "";
    }

    // Initial render
    showProducts(products);