// model/productService.js
export const fetchProducts = async () => {
  const response = await fetch('https://api.example.com/products');
  const data = await response.json();
  return data;
};
