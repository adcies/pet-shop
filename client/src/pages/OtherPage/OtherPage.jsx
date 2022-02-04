import Products from '../../components/Products/Products';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import './OtherPage.scss';

const OtherPage = ({ items, isLoading }) => {
  const currentPageCategory = 'other';

  const products = items.filter(item => item.category === currentPageCategory);

  return (
    <section className='other'>
      {isLoading && <LoadingSpinner />}
      <Products products={products} />
    </section>
  );
};

export default OtherPage;
