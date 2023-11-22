import products from './data.js';
import { generateProductCards, fillColorFilter, filterProducts, clearFilters } from './functions.js';

fillColorFilter(products);
generateProductCards(products);

const applyFiltersButton = document.getElementById('applyFiltersButton');
const clearFiltersButton = document.getElementById('clearFiltersButton');


applyFiltersButton.addEventListener('click', () => filterProducts(products));
clearFiltersButton.addEventListener('click', () => clearFilters(products));
