import './MyAccountPage.scss';
import { useSelector } from 'react-redux';
import Products from '../../components/Products/Products';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';

const MyAccountPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    user: { purchasedProducts, login, wallet },
  } = useSelector(state => state.user);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <section className='my-account'>
      {isModalOpen && (
        <Modal handleCloseModal={() => setIsModalOpen(false)}></Modal>
      )}
      <p className='my-account__hello'>
        Hello, <span className='my-account__hello--user'>{login}</span>
      </p>
      <p className='my-account__wallet'>
        Your wallet: <span className='my-account__wallet-money'>{wallet}</span>{' '}
        zł
      </p>
      <button
        disabled={isModalOpen}
        className='my-account__add-money'
        onClick={handleModalOpen}
      >
        Add money
      </button>
      <div className='purchased-products'>
        <p className='purchased-products__title'>Purchased products:</p>
        {<Products products={purchasedProducts} />}
      </div>
    </section>
  );
};

export default MyAccountPage;
