import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import MainNav from '../../components/MainNav/MainNav';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isMediumDevice = useMediaQuery({ query: '(min-width: 1024px)' });

  const handleCloseNavOrSearch = e => {
    const isMenuToggleBtn =
      e.target.parentElement.className === 'header__nav-toggle' ||
      e.target.parentElement.parentElement.className === 'header__nav-toggle';

    const isSearchToggleBtn =
      e.target.parentElement.className === 'header__search-toggle' ||
      e.target.parentElement.parentElement.className ===
        'header__search-toggle';

    const isSearchInput =
      e.target.className === 'search search--active' ||
      e.target.parentElement.className === 'search search--active';

    if (!isMenuToggleBtn) setIsMenuOpen(false);
    if (!isSearchToggleBtn && !isSearchInput) setIsSearchOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleCloseNavOrSearch);
    return () => {
      document.body.removeEventListener('click', handleCloseNavOrSearch);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevValue => !prevValue);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(prevValue => !prevValue);
  };

  return (
    <>
      <header className='header'>
        <div className='header__main-panel'>
          <div className='header__nav-toggle'>
            {!isMediumDevice && (
              <FontAwesomeIcon
                onClick={handleMenuToggle}
                className='header__nav-toggle-icon'
                icon={isMenuOpen ? faTimes : faBars}
              />
            )}
          </div>
          <div className='header__logo header__panel-element'>LOGO</div>
          <div className='header__search-toggle'>
            {!isMediumDevice && (
              <FontAwesomeIcon
                onClick={handleSearchToggle}
                className='header__search-toggle-icon'
                icon={faSearch}
              />
            )}
          </div>
          <div className='header__login header__panel-element'>
            <div className='header__login-btn-container'>
              <Link className='header__login-btn' to='/auth'>
                Log In
              </Link>
            </div>
          </div>
          <div
            className={
              isSearchOpen && !isMediumDevice
                ? 'search search--active header__panel-element'
                : 'search header__panel-element'
            }
          >
            <input className='search__input' type='text' />
            <button className='search__submit'>Search</button>
          </div>
        </div>

        <MainNav isMenuOpen={isMenuOpen && !isMediumDevice} />
      </header>
    </>
  );
}

export default Header;
