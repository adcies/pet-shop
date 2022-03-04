import { Link } from 'react-router-dom';

import './MainNav.scss';

const MainNav = ({ isMenuOpen }) => {
  return (
    <nav className={isMenuOpen ? 'nav nav--active' : 'nav'}>
      <ul className='nav__list'>
        <li className='nav__element'>
          <Link className='nav__link' to='/category/dogfood'>
            Dog Food
          </Link>
        </li>
        <li className='nav__element'>
          <Link className='nav__link' to='/category/catfood'>
            Cat Food
          </Link>
        </li>
        <li className='nav__element'>
          <Link className='nav__link' to='/category/toys'>
            Toys
          </Link>
        </li>
        <li className='nav__element'>
          <Link className='nav__link' to='/category/other'>
            Other
          </Link>
        </li>
        <li className='nav__element'>
          <Link className='nav__link' to='/myaccount'>
            My Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
