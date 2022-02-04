import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Products from '../../components/Products/Products';

import './DogFoodPage.scss';

const DogFoodPage = ({ items, isLoading }) => {
  const currentPageCategory = 'dog-food';

  const products = items.filter(item => item.category === currentPageCategory);

  return (
    <section className='dogfood'>
      {isLoading && <LoadingSpinner />}
      <Products products={products} />
    </section>
  );
};

export default DogFoodPage;
