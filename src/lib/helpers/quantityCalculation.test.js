import { calculateCategoryProducts, calculateBrandProducts, calculateModelProducts, calculateVariantProducts } from "./quantityCalculations";

it('calculates products', () => {
  const products = calculateCategoryProducts('category-id-0');
  expect(products.length).toBe(5);
});

it('calculates brands', () => {
  const products = calculateBrandProducts('brand-id-0');
  expect(products.length).toBe(4);
});

it('calculates models', () => {
  const products = calculateModelProducts('model-id-0');
  expect(products.length).toBe(1);
});

it('calculates variants', () => {
  const products = calculateVariantProducts('product-variant-5');
  expect(products.length).toBe(1);
});