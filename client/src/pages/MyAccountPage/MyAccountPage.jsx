import './MyAccountPage.scss';
import { useSelector } from 'react-redux';
import Products from '../../components/Products/Products';

const MyAccountPage = () => {
  const {
    user: { purchasedProducts, login, wallet },
  } = useSelector(state => state.user);

  return (
    <section className='my-account'>
      <p className='my-account__hello'>
        Hello, <span className='my-account__hello--user'>{login}</span>
      </p>
      <p className='my-account__wallet'>
        Your wallet: <span className='my-account__wallet-money'>{wallet}</span>{' '}
        zł
      </p>
      <div className='purchased-products'>
        <p className='purchased-products__title'>Purchased products:</p>
        {<Products products={purchasedProducts} />}
      </div>
    </section>
  );
};

export default MyAccountPage;
