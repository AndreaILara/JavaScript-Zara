import products from './data.js';
import { generateProductCards, fillColorFilter, filterProducts, clearFilters } from './functions.js';

fillColorFilter(products);
generateProductCards(products);

document.getElementById('applyFiltersButton').addEventListener('click', () => filterProducts(products));
document.getElementById('clearFiltersButton').addEventListener('click', () => clearFilters(products));