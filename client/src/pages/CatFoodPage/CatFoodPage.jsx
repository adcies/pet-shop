import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Products from '../../components/Products/Products';
import './CatFoodPage.scss';

const CatFoodPage = ({ items, isLoading }) => {
  const currentPageCategory = 'cat-food';

  const products = items.filter(item => item.category === currentPageCategory);

  return (
    <section className='catfood'>
      {isLoading && <LoadingSpinner />}
      <Products products={products} />
    </section>
  );
};

export default CatFoodPage;
