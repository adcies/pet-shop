import Products from '../../components/Products/Products';
import './CatFoodPage.scss';

const CatFoodPage = ({ items }) => {
  const currentPageCategory = 'cat-food';

  const products = items.filter(item => item.category === currentPageCategory);

  return (
    <section className='catfood'>
      <Products products={products} />
    </section>
  );
};

export default CatFoodPage;
