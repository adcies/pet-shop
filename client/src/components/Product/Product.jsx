import './Product.scss';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { name, description, price, img, id } = product;

  const imageStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className='product'>
      <p className='product__name'>{name}</p>
      <p className='product__description'>{description}</p>
      <p className='product__price'> Price: {price} zł</p>
      <div className='product__buy'>
        <Link className='product__buy-btn' to={'/buynow/' + id}>
          Buy now
        </Link>
      </div>
      <div style={imageStyle} className='product__img'></div>
    </div>
  );
};

export default Product;
