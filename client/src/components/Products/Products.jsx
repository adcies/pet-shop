import Product from '../Product/Product';

import './Products.scss';

const Products = ({ products }) => {
  const elements = products.map(product => (
    <Product key={product.id} product={product} />
  ));

  return <div className='products'>{elements}</div>;
};

export default Products;
