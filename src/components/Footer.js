import React from 'react';
import SocialFollow from './SocialFollow';


export default function Footer() {

  return (
    <>
    <footer className="footer section">
        <div className="bd-container">
            <div className="footer__container bd-grid">
                <div className="footer__content">
                    <h3 className="copyright">&#169; 2020 Your company</h3>
                </div>
                <div className="footer__content footer__logo">
                    <h3 className="footer__title">Landie</h3>
                </div>
                <div className="footer__content footer__btn">
                    <a href="/" className="button">Buy Now</a>
                </div>
            </div>
            <hr />
            <div className="footer__nav">
                <div className="nav__menu" id="footer__nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>

                <SocialFollow />

            </div>
        </div>
    </footer>
    </>
  );
}