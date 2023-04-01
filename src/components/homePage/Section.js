import React from 'react'
import Product from './Product'

import image1 from '../../images/Bellagio-Hotel-Casino-Las-Vegas 1.png'
import image2 from '../../images/92533880 1.png'
import image3 from '../../images/17647231 1.png'

const Section = () => {
  return (
    <div className='section'>
        <div className='productsHeader'>
            <div className='sortProducts'>
                <a href='#'>Sort by distance</a>
                <a href='#'>Sort by price</a>
            </div>
            <button className='getQuotationBtn'>Get Quotation</button>
        </div>
        <div className='allProducts'>
            <Product 
                name="Bellagio Hotel & Casino - MGM"
                image={image1}
                p1="1.23 km from venue"
                stars="* * * * *"
                p2="Direct public transportation to venue"
                p3="Breakfast included"
                price="$153.26"
            />

            <Product 
                name = "Ruby Lilly Hotel Munich" 
                image = {image2}
                p1 = "3.12 km from venue"
                stars = "* * * * *"
                p2 = "Direct public transportation to venue"
                p3 = "Breakfast included"
                price = "$121.12"
            />

            <Product 
                name = "Novotel Munchen Messe" 
                image = {image3}
                p1 = "0.3 km from venue"
                stars = "* * * * *"
                p2 = "Direct public transportation to venue"
                p3 = "Breakfast included"        
                price = "$236.64"
            />
            <Product 
                name = "Novotel Munchen Messe" 
                image = {image3}
                p1 = "0.3 km from venue"
                stars = "* * * * *"
                p2 = "Direct public transportation to venue"
                p3 = "Breakfast included"        
                price = "$236.64"
            />
            <Product 
                name="Bellagio Hotel & Casino - MGM"
                image={image1}
                p1="1.23 km from venue"
                stars="* * * * *"
                p2="Direct public transportation to venue"
                p3="Breakfast included"
                price="$153.26"
            />

            <Product 
                name = "Ruby Lilly Hotel Munich" 
                image = {image2}
                p1 = "3.12 km from venue"
                stars = "* * * * *"
                p2 = "Direct public transportation to venue"
                p3 = "Breakfast included"
                price = "$121.12"
            />
        </div>
    </div>
  )
}

export default Section