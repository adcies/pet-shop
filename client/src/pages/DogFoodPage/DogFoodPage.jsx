import Products from '../../components/Products/Products';

import './DogFoodPage.scss';

const DogFoodPage = ({ items }) => {
  const currentPageCategory = 'dog-food';

  const products = items.filter(item => item.category === currentPageCategory);

  return (
    <section className='dogfood'>
      <Products products={products} />
    </section>
  );
};

export default DogFoodPage;
