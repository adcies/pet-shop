import './HomePage.scss';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { items, loading } = useSelector(state => state.item);
  const elements = items.map(item => {
    return (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    );
  });

  return <div className='homepage'>{elements}</div>;
};

export default HomePage;
