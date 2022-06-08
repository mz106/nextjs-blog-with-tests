function getProducts() {
    const response = fetch('http://api.fakeshop-api.com/products/getAllProducts');
    const data = response.json();
    console.log(data)
    return response;
};

getProducts();