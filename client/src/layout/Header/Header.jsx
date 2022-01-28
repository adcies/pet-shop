import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import MainNav from '../../components/MainNav/MainNav';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMediumDevice = useMediaQuery({ query: '(min-width: 1024px)' });

  const handleCloseNav = e => {
    const isMenuToggleBtn =
      e.target.parentElement.className === 'header__nav-toggle' ||
      e.target.parentElement.parentElement.className === 'header__nav-toggle';
    if (!isMenuToggleBtn) setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleCloseNav);
    return () => {
      document.body.removeEventListener('click', handleCloseNav);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevValue => !prevValue);
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
          <Link className='header__home-btn' to='/'>
            <FontAwesomeIcon className='header__home-btn' icon={faHome} />
          </Link>

          <div className='header__login header__panel-element'>
            <div className='header__login-btn-container'>
              <Link className='header__login-btn' to='/auth'>
                Log In
              </Link>
            </div>
          </div>
        </div>

        <MainNav isMenuOpen={isMenuOpen && !isMediumDevice} />
      </header>
    </>
  );
}

export default Header;
