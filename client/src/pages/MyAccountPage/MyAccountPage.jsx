import './MyAccountPage.scss';
import { useSelector } from 'react-redux';
import Products from '../../components/Products/Products';

const MyAccountPage = () => {
  const {
    user: { purchasedProducts, login, wallet },
  } = useSelector(state => state.user);

  return (
    <section className='my-account'>
      <p className='my-account__hello'>Hello, {login}</p>
      <p className='my-account__wallet'>
        Your wallet:
        <span className='my-account__wallet-money'>{wallet}</span> zł
      </p>
      <div className='purchased-products'>
        Purchased products:
        {<Products products={purchasedProducts} />}
      </div>
    </section>
  );
};

export default MyAccountPage;
