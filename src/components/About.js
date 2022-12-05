import React from 'react';

export default function About() {
  
  return (
    <>
    <div className="l-main">
    <section className="about" id="about">
        <div className="home__container bd-container bd-grid">
            <div className="home__data">
                <h1 className="title">Light, Fast & Powerful</h1>
                <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.
                </p>
                <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                </p>
                <div className="about__sub">
                    <div className="about__sub_left">
                        <img src={"../images/Shape.png"} alt="" />
                        <h2 className="sub__title">Title Goes Here</h2>
                        <p className="about__sub__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="about__sub_right">
                        <img src="../images/Shape.png" alt="" />
                        <h2 className="sub__title">Title Goes Here</h2>
                        <p className="about__sub__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <img src="../images/landie_about.png" alt="" className="home__img" />
        </div>
    </section>
    <section className="about section" id="about1">
        <div className="about__container  bd-grid bd-container">
            <div className="about__data">
                <h1 className="title">Light, Fast & Powerful</h1>
                <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.
                </p>
                <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                </p>
            </div>
            <img src="../images/undraw_happy.png" alt="" className="about__img" />
        </div>
    </section>
    <section className="contact section" id="contact">
        <div className="contact__container bd-container">
            <div className="contact__data">
                <h1 className="price__title">A Price To Suit Everyone</h1>
                <p className="about__description contact__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad veniam, quis nostrud.
                </p>
                <h1 className="price">$40</h1>
                <p className="price__sub_title">UI Design Kit</p>
                <div className="contact__btn">
                    <p className="price__sub_title_2">See, One price, Simple</p>
                    <a href="/" className="button">Purchase Now</a>
                </div>
            </div>
        </div>
    </section>
    </div>
    </>
  );
}