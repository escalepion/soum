import React from 'react';
import { useDispatch } from "react-redux";
import { checkCategory } from "store/categories/actions";
import { variants } from 'lib/data/productData';
import CheckBoxWrapper from 'components/checkBoxWrapper';

const VariantCard = (props) => {
  let dispatch = useDispatch();
  const { variant = {} } = props;
  const { products } = variant;
  const findedVariant = variants.find(v => v.id === variant.variantId);

  const handleVariantChecked = () => {
    dispatch(checkCategory({ type: 'variant', id: variant.id }));
  }

  return (
    <div>
      <CheckBoxWrapper
        checked={!!variant?.isChecked}
        onChange={handleVariantChecked}
        title={findedVariant?.name}
        desc={`${products.length || '0' } product${products.length > 1 ? 's' : ''}`}
      />
    </div>
  );
}

export default VariantCard;
