import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { checkCategory } from "store/categories/actions";
import BrandCard from 'components/brandCard';
import CheckBoxWrapper from 'components/checkBoxWrapper';

const CategoryCard = (props) => {
  let dispatch = useDispatch();
  const [ categoryIsOpen, setCategoryIsOpen ] = useState(false);
  const { category = {} } = props;
  const { name = '', products = [] } = category;
  const categoryBrands = category?.children || [];

  const handleCategoryChecked = () => {
    dispatch(checkCategory({ type: 'category', id: category.id }));
  }

  return (
    <div>
      <CheckBoxWrapper
        checked={!!category?.isChecked}
        onChange={handleCategoryChecked}
        onOpenChildren={() => setCategoryIsOpen(!categoryIsOpen)}
        title={name}
        desc={`${products.length || '0' } product${products.length > 1 ? 's' : ''}`}
      >
        {categoryIsOpen && !!categoryBrands.length && categoryBrands.map(brand => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </CheckBoxWrapper>
    </div>
  );
}

export default CategoryCard;
