import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Products from '../../components/Products/Products';

import './CategoryPage.scss';

const CategoryPage = ({
  items,
  isLoading,
  currentPageName,
  currentPageCategory,
}) => {
  const products = items.filter(
    item =>
      item.category ===
      (currentPageCategory ? currentPageCategory : item.category)
  );

  return (
    <section className='products-page'>
      <h2 className='products-page__title'>{currentPageName}</h2>
      {isLoading && <LoadingSpinner />}
      <Products products={products} />
    </section>
  );
};

export default CategoryPage;
