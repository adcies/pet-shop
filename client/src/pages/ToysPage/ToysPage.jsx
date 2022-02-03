import Products from '../../components/Products/Products';

import './ToysPage.scss';

const ToysPage = ({ items }) => {
  const currentPageCategory = 'toys';

  const products = items.filter(item => item.category === currentPageCategory);

  return (
    <section className='toys'>
      <Products products={products} />
    </section>
  );
};

export default ToysPage;
