import Products from '../../components/Products/Products';

import './OtherPage.scss';

const OtherPage = ({ items }) => {
  const currentPageCategory = 'other';

  const products = items.filter(item => item.category === currentPageCategory);

  return (
    <section className='other'>
      <Products products={products} />
    </section>
  );
};

export default OtherPage;
