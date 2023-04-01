import React from 'react'

const ProductMore = () => {
  return (
    <div className='productMore'>
        <h1>Request availability at <strong>INNSiDE by Melia Frankfurt Eurotheum</strong></h1>
        <div className='table'>
            <div className='row'>
                <div className='col1'>Room type</div>
                <div className='col2'>sleeps</div>
                <div className='col3'>Number of rooms</div>
            </div>
            <div className='row'>
                <div className='col1'>Single use room</div>
                <div className='col2'>O</div>
                <div className='col3'>-      0 +</div>
            </div>
            <div className='row'>
                <div className='col1'>Double use room</div>
                <div className='col2'>OO</div>
                <div className='col3'>-  0  +</div>
            </div>
            <div className='row'>
                <div className='col1'>Trible use room</div>
                <div className='col2'>OOO</div>
                <div className='col3'>-  0  +</div>
            </div>
        </div>
        <p className='p1'>
            Requesting avilability is <strong>NOT</strong>  a booking yet, you will have to wait for our response with confirmation 
            of availability and prices for your request
        </p>
        <p className='p2'>click proceed to set dates and complete request.</p>
        <button className='proceedBtn'>Proceed</button>
    </div>
  )
}

export default ProductMore