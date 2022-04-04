const setCategoryChecked = (data, type, id) => {
  let newData = [ ...data ];
  if(type === 'category') {
    newData = newData.map(category => {
      const isCategoryChecked = category.id === id ? !category.isChecked : category.isChecked;
      return {
        ...category,
        isChecked: isCategoryChecked,
        children: category.children.map(brand => {
          return {
            ...brand,
            isChecked: isCategoryChecked,
            children: brand.children.map(model => {
              return {
                ...model,
                isChecked: isCategoryChecked,
                variants: model.variants.map(variant => {
                  return {
                    ...variant,
                    isChecked: isCategoryChecked
                  }
                })
              }
            })
          }
        })
      }
    })
  }

  if(type === 'brand') {
    newData = newData.map(category => {
      return {
        ...category,
        children: category.children.map(brand => {
          const isBrandChecked = brand.id === id ? !brand.isChecked : brand.isChecked;
          return {
            ...brand,
            isChecked: isBrandChecked,
            children: brand.children.map(model => {
              return {
                ...model,
                isChecked: isBrandChecked,
                variants: model.variants.map(variant => {
                  return {
                    ...variant,
                    isChecked: isBrandChecked
                  }
                })
              }
            })
          }
        })
      }
    })
  }

  if(type === 'model') {
    newData = newData.map(category => {
      return {
        ...category,
        children: category.children.map(brand => {
          return {
            ...brand,
            children: brand.children.map(model => {
              const isModelhecked = model.id === id ? !model.isChecked : model.isChecked;
              return {
                ...model,
                isChecked: isModelhecked,
                variants: model.variants.map(variant => {
                  return {
                    ...variant,
                    isChecked: isModelhecked
                  }
                })
              }
            })
          }
        })
      }
    })
  }

  if(type === 'variant') {
    newData = newData.map(category => {
      return {
        ...category,
        children: category.children.map(brand => {
          return {
            ...brand,
            children: brand.children.map(model => {
              return {
                ...model,
                variants: model.variants.map(variant => {
                  const isvarianthecked = variant.id === id ? !variant.isChecked : variant.isChecked;
                  return {
                    ...variant,
                    isChecked: isvarianthecked
                  }
                })
              }
            })
          }
        })
      }
    })
  }

  // last refactor for check/uncheck if some of children are unchecked, it returns to unchecked
  // if is unchecked and all children are checked, it returns to checked

  const mappedData = newData.map(category => {
    let categoryIsChecked = !!category?.isChecked;
    if(category?.children?.length)
      categoryIsChecked = category.children.every(brand => !!brand.isChecked );
    
    return {
      ...category,
      isChecked: categoryIsChecked,
      children: category.children.map(brand => {
        let brandIsChecked = !!brand?.isChecked;
        if(brand?.children?.length)
          brandIsChecked = brand.children.every(model => !!model.isChecked );
        return {
          ...brand,
          isChecked: brandIsChecked,
          children: brand.children.map(model => {
            let modelIsChecked = !!model?.isChecked;
              if(model?.variants?.length)
                modelIsChecked = model.variants.every(variant => !!variant.isChecked );
            return {
              ...model,
              isChecked: modelIsChecked,
            }
          })
        }
      })
    }
  })

  return mappedData;
}

export default setCategoryChecked;