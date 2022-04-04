import { categories } from "lib/data/productData";
import { calculateCategoryProducts, calculateBrandProducts, calculateModelProducts, calculateVariantProducts } from "./quantityCalculations";

const getGategoryTree = () => {
  return categories.map(category => {
    return {
      ...category,
      products: calculateCategoryProducts(category.id),
      children: category.children.map(brand => {
        return {
          ...brand,
          products: calculateBrandProducts(brand.id),
          children: brand.children.map(model => {
            return {
              ...model,
              products: calculateModelProducts(model.id),
              variants: model.variants.map(variant => {
                return {
                  ...variant,
                  products: calculateVariantProducts(variant.id),
                }
              })
            }
          })
        }
      })
    }
  })
}

export default getGategoryTree;