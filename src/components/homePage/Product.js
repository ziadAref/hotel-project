import React from 'react'

const Product = (props) => {
    return (
        <div className='product'>

            <h4 className='productName'>{props.name}</h4>
            <img className='productImg' src={props.image}></img>

            <div className='description'>
                <p className='p1'>{props.p1}</p>
                <p className='stars'>{props.stars}</p>
                <p className='p2'>{props.p2}</p>
                <p className='p3'>{props.p3}</p>
            </div>
            <div className='detail'>
                <h3 className='productPrice'>{props.price}</h3>
                <h5 className='productCurrency'>EUR | avg/night</h5>
            </div>
            <button className='seeDetailsBtn'>See Details</button>
        </div>
    )
}

export default Product