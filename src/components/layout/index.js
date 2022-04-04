import React from 'react';
import { useSelector } from "react-redux";
import { getCheckedTexts } from 'lib/helpers/getCheckedTexts';
import CategoryCard from 'components/categoryCard';
import Summary from 'components/summary';

import styles from './layout.module.scss';

const Layout = () => {
  const fetchedCategories = useSelector(state => state.CategoriesReducer)?.categories || [];
  const checkedTexts = getCheckedTexts(fetchedCategories);

  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.menuWrapper}>
        {!!fetchedCategories?.length && fetchedCategories.map(category => <CategoryCard key={category.id} category={category} />)}
      </div>
      <Summary data={checkedTexts} />
    </div>
  )
}

export default Layout;
