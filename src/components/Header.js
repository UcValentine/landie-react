import React from 'react';

export default function Header() {
  
  return (
    <>
    <header className="l-header" id="header">
        <nav className="nav bd-container">
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                </ul>
            </div>
            <a href="/" className="nav__logo">Landie</a>
            <a href="/" className="button">Buy Now</a>
            <div className="nav__toggle" id="nav-toggle">
                <div className='bx bx-menu'></div>
                <div className='bx bx-menu'></div>
                <div className='bx bx-menu'></div>
                {/* <i className='bx bx-menu'></i> */}
            </div>
        </nav>
    </header>
    </>
  );
}