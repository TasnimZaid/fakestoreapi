function Newobject(title, price, desc, image) {
  this.title = title;
  this.price = price;
  this.desc = desc;
  this.image = image;
}

function getelement() {
  const newarray = [];
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        const obj = new Newobject(json[i].title, json[i].price, json[i].description, json[i].image);
        newarray.push(obj);
      }
      return newarray;
    });
}

function displayProduct(products) {
  const productcont = document.getElementById('products'); // Fixed the id to 'products'

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <h2>${product.title}</h2>
      <p>Price: $${product.price}</p>
      <p>Description: ${product.desc}</p>
      <img src="${product.image}" alt="${product.title}" style="width: 100px; height: 100px;">
    `;

    productcont.appendChild(productDiv);
  });
}

getelement().then(newarray => displayProduct(newarray));


