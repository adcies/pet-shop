import './HomePage.scss';
import Products from '../../components/Products/Products';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const HomePage = ({ items, isLoading }) => {
  return (
    <section className='homepage'>
      {isLoading && <LoadingSpinner />}
      <Products products={items} />
    </section>
  );
};

export default HomePage;
