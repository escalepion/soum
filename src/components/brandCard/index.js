import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { checkCategory } from "store/categories/actions";
import ModelCard from 'components/modelCard';
import CheckBoxWrapper from 'components/checkBoxWrapper';

const BrandCard = (props) => {
  let dispatch = useDispatch();
  const [ brandIsOpen, setBrandIsOpen ] = useState(false);
  const { brand = {} } = props;
  const { name = '', id, products } = brand;
  const brandModels = brand?.children || [];

  const handleBrandChecked = () => {
    dispatch(checkCategory({ type: 'brand', id }));
  }

  return (
    <div>
      <CheckBoxWrapper
        checked={!!brand?.isChecked}
        onChange={handleBrandChecked}
        onOpenChildren={() => setBrandIsOpen(!brandIsOpen)}
        title={name}
        desc={`${products.length || '0' } product${products.length > 1 ? 's' : ''}`}
      >
        {brandIsOpen && !!brandModels.length && brandModels.map(model => (
          <ModelCard key={model.id} model={model} />
        ))}
      </CheckBoxWrapper>
    </div>
  );
}

export default BrandCard;
