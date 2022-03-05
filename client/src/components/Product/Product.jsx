import './Product.scss';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { name, description, price, img, id, amount } = product;

  const imageStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className={price ? 'product' : 'product product--myaccount'}>
      <p className='product__name'>{name}</p>
      <p className='product__description'>{description}</p>
      {price && <p className='product__price'> Price: {price} zł</p>}
      {price && (
        <div className='product__buy'>
          <Link className='product__buy-btn' to={'/buynow/' + id}>
            Buy now
          </Link>
        </div>
      )}
      {!price && <p className='product__amount'>Amount: {amount}</p>}
      <div
        style={imageStyle}
        className={
          price ? 'product__img' : 'product__img product__img--myaccount'
        }
      ></div>
    </div>
  );
};

export default Product;
