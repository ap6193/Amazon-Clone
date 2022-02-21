import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
            <div className='home__row'>
                <Product title='Who Will Cry When You Die' 
                price={149} 
                image="https://images-na.ssl-images-amazon.com/images/I/51m2o0HOtgL._SX339_BO1,204,203,200_.jpg" 
                rating={5}/>
                <Product title='boAt Xtend Smartwatch with Alexa Built-in' 
                price={2999} 
                image="https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg" 
                rating={4} />
            </div>
            <div className='home__row'>
            <Product title='Lord Hanuman Idol (Bronze Sculpture)' 
                price={4999} 
                image="https://m.media-amazon.com/images/I/512Z1tkCgFL.jpg" 
                rating={5}/>
            <Product title='SPORTO FITNESS 10 KG Dumbell Set PVC Black' 
                price={799} 
                image="https://m.media-amazon.com/images/I/71jrN5hoO6L._SL1500_.jpg" 
                rating={3}/>
            <Product title='Optimum Nutrition (ON) Gold Standard Whey Protein Powder, 5 lbs' 
                price={6544} 
                image="https://m.media-amazon.com/images/I/616cI2pfTOL._SL1200_.jpg" 
                rating={4}/>
            </div>
            <div className='home__row'>
            <Product title='Samsung Gaming Monitor 123.9cm (49") Gaming Monitor with 32:9 aspect ratio display and 240Hz refresh rate'
                price={156649} 
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" 
                rating={5}/>
            </div>

        </div>
    </div>
  )
}

export default Home;