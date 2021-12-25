import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevValue => !prevValue);
    setIsSearchOpen(false);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(prevValue => !prevValue);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className='header'>
        <div className='header__main-panel'>
          <div className='header__nav-toggle'>
            <FontAwesomeIcon
              onClick={handleMenuToggle}
              className='header__nav-toggle-icon'
              icon={isMenuOpen ? faTimes : faBars}
            />
          </div>
          <div className='header__logo header__panel-element'>LOGO</div>
          <div className='header__search-toggle'>
            <FontAwesomeIcon
              onClick={handleSearchToggle}
              className='header__search-toggle-icon'
              icon={faSearch}
            />
          </div>

          <div className='header__login header__panel-element'>
            <button className='header__login-btn '>Log In</button>
          </div>
        </div>
        <div className={isSearchOpen ? 'search search--active' : 'search'}>
          <input className='search__input' type='text' />
          <button className='search__submit'>Search</button>
        </div>
        <nav className={isMenuOpen ? 'nav nav--active' : 'nav'}>
          <ul className='nav__list'>
            <li className='nav__element'>
              <a className='nav__link' href='#'>
                test1
              </a>
            </li>
            <li className='nav__element'>
              <a className='nav__link' href='#'>
                test2
              </a>
            </li>
            <li className='nav__element'>
              <a className='nav__link' href='#'>
                test3
              </a>
            </li>
            <li className='nav__element'>
              <a className='nav__link' href='#'>
                test4
              </a>
            </li>
            <li className='nav__element'>
              <a className='nav__link' href='#'>
                test5
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;