import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import styled from 'styled-components';

const Logo = styled.img`
  width: 25%;

`

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div>
          <Link to='/' onClick={closeMobileMenu}>
            <Logo src='/assets/Logo PowerKid.png'></Logo>
          </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              หน้าหลัก
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/course'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              หลักสูตรของเรา <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/cost'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ราคา
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/enroll'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              สมัครเรียน
            </Link>
          </li>
          <li>
            <Link
              to='/trial'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              ทดลองเรียนฟรี
            </Link>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;