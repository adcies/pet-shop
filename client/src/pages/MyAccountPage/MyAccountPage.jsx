import './MyAccountPage.scss';
import { useSelector } from 'react-redux';

const MyAccountPage = () => {
  const {
    user: { purchasedProducts, login, wallet },
  } = useSelector(state => state.user);

  return (
    <section className='my-account'>
      <p className='my-account__hello'>Hello, {login}</p>
      <p className='my-account__wallet'>
        Your wallet:
        <span className='my-account__wallet-money'>{wallet}</span>
      </p>
      <div className='purchased-products'>
        Purchased products:
        {purchasedProducts.map(product => (
          <div key={product.id} className='purchased-product__item'>
            <p className='purchased-product__name'>{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyAccountPage;
