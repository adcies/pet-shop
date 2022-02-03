import Product from '../Product/Product';

const Products = ({ products }) => {
  const elements = products.map(product => (
    <Product key={product.id} product={product} />
  ));

  return <div className='products'>{elements}</div>;
};

export default Products;
