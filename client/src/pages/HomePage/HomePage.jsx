import './HomePage.scss';
import { useSelector } from 'react-redux';
import Products from '../../components/Products/Products';

const HomePage = ({ items }) => {
  return (
    <section className='homepage'>
      <Products products={items} />
    </section>
  );
};

export default HomePage;
