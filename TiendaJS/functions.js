function generateProductCards(products) {
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Color: ${product.color}</p>
      <p>Precio: €${product.price}</p>
    `;
    productContainer.appendChild(card);
  });
}

function fillColorFilter(products) {
  const colorFilter = document.getElementById('colorFilter');
  const colors = [...new Set(products.map(product => product.color))];

  colors.forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    colorFilter.appendChild(option);
  });
}

function filterProducts(products) {
  const colorValue = document.getElementById('colorFilter').value;
  const priceInput = document.getElementById('priceFilter');
  let priceValue = parseFloat(priceInput.value);


  if (isNaN(priceValue) || priceValue < 0) {
    priceValue = 0;
    priceInput.value = priceValue;
  }

  const filteredProducts = products.filter(product => {

    return ((colorValue === '-' || product.color === colorValue) || colorValue === '') &&
      (!isNaN(priceValue) && product.price >= priceValue);
  });
  generateProductCards(filteredProducts);
}

function clearFilters(products) {
  document.getElementById('priceFilter').value = '';
  generateProductCards(products);
}

export { generateProductCards, fillColorFilter, filterProducts, clearFilters };
