import { variants } from "lib/data/productData";

export const getCheckedTexts = (categories) => {
  let texts = [];
  categories.forEach(category => {
    if(!!category.isChecked) {
      texts = [ ...texts, `All ${category.name}` ]
    }
    if(!category?.isChecked) {
      category.children.forEach(brand => {
        if(!!brand.isChecked) {
          texts = [ ...texts, `All ${brand.name} devices` ]
        }
        if(!brand?.isChecked) {
          brand.children.forEach(model => {
            if(!!model.isChecked) {
              texts = [ ...texts, `All ${model.name} devices` ]
            }
            if(!model?.isChecked && !!model?.variants?.length && model.variants.some(variant => !!variant.isChecked)) {
              let variantText = '';
              let checkedVariants = [];
              model.variants.forEach(variant => {
                if(!!variant.isChecked) {
                  const findedVariant = variants.find(v => v.id === variant.variantId);
                  checkedVariants = [ ...checkedVariants, findedVariant.name ]
                }
              })
              variantText = `${model.name} ${checkedVariants.join(', ')}`;
              texts = [ ...texts, variantText ];
            }
          })
        }
      })
    }
  })
  return texts;
}
