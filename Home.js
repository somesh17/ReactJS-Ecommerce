import React from 'react';
import Header from './Header';
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <>
    <Header />
        <div className='home'>
            <div className='home__container'>
                <img
                className='home__image' 
                // src="./images/room.jpg"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
                alt="home banner"
                />

                <div className='home__row'>
                    <Product 
                    id="12342314212"
                    title="The Lean Startup"
                    price={29.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    
                    />
                    <Product 
                    id="12342314212"
                    title="Samsung LC49234RG 49' Curved LED Gaming Monitor"
                    price={29.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    
                    />
                    
                </div>

                <div className='home__row'>
                <Product 
                    id="12342314"
                    title="Samsung LC49234RG 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    
                    />
                <Product 
                    id="123423144"
                    title="Amazon Ech 3rd Generation | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={3}
                    image="./images/watch.png"
                    
                    />
                <Product 
                    id="123423145"
                    title="New Apple ipad Pro (12.9-inch, wi-fi, 128GB) - Silver (4th Generation)"
                    price={98.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    
                    />
                    
                </div>

                <div className='home__row'>
                <Product 
                    id="12342314567"
                    title="Samsung LC49234RG 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    
                    />
                
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Home