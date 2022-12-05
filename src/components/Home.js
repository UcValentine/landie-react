import React from 'react';

export default function Home() {
  
  return (
    <>
    <div className="l-main">
        <section className="home bg-img" id="home">
            <div className="home__container bd-container bd-grid bg">
                <div className="home__data hm">
                    <h1 className="title">Introduce Your Product Quickly & Effectively</h1>
                    <p className="home__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. 
                    </p><br />
                    <p className="home__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                    </p>
                    <div className="home__btns">
                        <a href="/" className="button left-btn">Purchase UI Kit</a>
                        <a href="/" className="button right-btn">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  );
}