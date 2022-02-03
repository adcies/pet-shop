const Product = ({ product }) => {
  const { name, description, price, img } = product;
  return (
    <div className='product'>
      <p className='product__name'>{name}</p>
      <p className='product__description'>{description}</p>
      <p className='product__price'>{price}</p>
      <img className='product__img' src={img} alt={name} />
    </div>
  );
};

export default Product;
