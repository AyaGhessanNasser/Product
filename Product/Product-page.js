
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(products => {
        const productsList = document.getElementById("head");
        

        products.forEach(product => {
          const li = document.createElement("li");
          li.textContent = product.name;
          li.addEventListener("click", () => add(product.id));
          productsList.appendChild(li);
        });
      })
      .catch(error => console.log(error));

    // Redirect to Add Product Page
    function add() {
      window.location.href = "product details page.html";
    }

    // Redirect to Product Details Page
    function add(productId) {
      window.location.href = `product details page.html?id=${productId}`;
    }

    fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(products => {
      const productsList = document.getElementById("head1");
      

      products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        li.addEventListener("click", () => add(product.id));
        productsList.appendChild(li);
      });
    })
    .catch(error => console.log(error));

  // Redirect to Add Product Page1
  function add1() {
    window.location.href = "product details page1.html";
  }

  // Redirect to Product Details Page1
  function add1(productId) {
    window.location.href = `product details page1.html?id=${productId}`;
  }
///////////product 2/////
  fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(products => {
      const productsList = document.getElementById("head2");
      

      products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        li.addEventListener("click", () => add(product.id));
        productsList.appendChild(li);
      });
    })
    .catch(error => console.log(error));

  // Redirect to Add Product Page2
  function add2() {
    window.location.href = "product detalis page2.html";
  }

  // Redirect to Product Details Page2
  function add2(productId) {
    window.location.href = `product detalis page2.html?id=${productId}`;
  }

  fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(products => {
    const productsList = document.getElementById("head3");
    

    products.forEach(product => {
      const li = document.createElement("li");
      li.textContent = product.name;
      li.addEventListener("click", () => add(product.id));
      productsList.appendChild(li);
    });
  })
  .catch(error => console.log(error));

// Redirect to Add Product Page3
function add3() {
  window.location.href = "product  details page3.html";
}

// Redirect to Product Details Page3
function add3(productId) {
  window.location.href = `product  details page3.html?id=${productId}`;
}











