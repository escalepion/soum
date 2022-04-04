import { products } from "lib/data/productData";

export const calculateCategoryProducts = (categoryId) => {
  const categoryProducts = products.filter(product => product.categoryId === categoryId);
  return categoryProducts;
}

export const calculateBrandProducts = (brandId) => {
  const brandProducts = products.filter(product => product.brandId === brandId);
  return brandProducts;
}

export const calculateModelProducts = (modelId) => {
  const modelProducts = products.filter(product => product.modelId === modelId);
  return modelProducts;
}

export const calculateVariantProducts = (variantId) => {
  const variantProducts = products.filter(product => product.variantId === variantId);
  return variantProducts;
}