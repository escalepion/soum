import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { checkCategory } from "store/categories/actions";
import VariantCard from 'components/variantCard';
import CheckBoxWrapper from 'components/checkBoxWrapper';

const ModelCard = (props) => {
  let dispatch = useDispatch();
  const [ modelIsOpen, setModelIsOpen ] = useState(false);
  const { model = {} } = props;
  const { name = '', variants = [], id, products } = model;

  const handleModelChecked = () => {
    dispatch(checkCategory({ type: 'model', id }));
  }

  return (
    <div>
      <CheckBoxWrapper
        checked={!!model?.isChecked}
        onChange={handleModelChecked}
        onOpenChildren={() => setModelIsOpen(!modelIsOpen)}
        title={name}
        desc={`${products.length || '0' } product${products.length > 1 ? 's' : ''}`}
      >
        {modelIsOpen && !!variants.length && variants.map(variant => (
          <VariantCard key={variant.variantId} variant = {variant} />
        ))}
      </CheckBoxWrapper>
    </div>
  );
}

export default ModelCard;
