import './Product.scss';

const Product = ({ product }) => {
  const { name, description, price, img } = product;

  const imageStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className='product'>
      <p className='product__name'>{name}</p>
      <p className='product__description'>{description}</p>
      <p className='product__price'>{price}</p>
      <div style={imageStyle} className='product__img'></div>
    </div>
  );
};

export default Product;
