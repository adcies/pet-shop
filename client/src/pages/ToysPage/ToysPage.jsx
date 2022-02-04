import Products from '../../components/Products/Products';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import './ToysPage.scss';

const ToysPage = ({ items, isLoading }) => {
  const currentPageCategory = 'toys';

  const products = items.filter(item => item.category === currentPageCategory);

  return (
    <section className='toys'>
      {isLoading && <LoadingSpinner />}
      <Products products={products} />
    </section>
  );
};

export default ToysPage;
