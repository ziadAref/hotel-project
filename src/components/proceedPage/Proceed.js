import React from 'react'

const Proceed = () => {
  return (
    <div className='proceedPage'>
        <div className='div1'>
            <p className='p1'>Get a customized qoutation in several hotels based on your requirments</p>
            <form className='addRoomForm'>
                <div className='div11'>
                    <div id='g'>
                        <label>Room type</label>
                        <input id='one' type='text'/>
                    </div>
                    <div id='gg'>
                        <label>Number of rooms</label>
                        <input id='two' placeholder='-  0  +'/>
                    </div>
                    <div>
                        <label>Check-in and out of Dates</label>
                        <input id='three' type='text' placeholder='16.04.2023 - 18.04.2023'/>
                    </div>
                </div>
                <button className='addRoomBtn'>+ Add Room</button>
            </form>
        </div>
        <div className='div2'>
            <p className='p2'>Optional</p>
            <div className='div-i'>
                <label>Your Budget per night</label>
                <input type='text' placeholder='Up to 100 EUR' />
            </div>

            <div className='div-ii'>
                <label>Location and Preferences</label>
                <div className='div11'><input type='checkbox' id='check111' /> <label htmlFor='check111'>Walking distance hotels to exhibition</label></div>
                <div className='div22'><input type='checkbox' id='check222' /> <label htmlFor='check222'>As close as possible to the exhibition.</label></div>
                <div className='div33'><input type='checkbox' id='check333' /> <label htmlFor='check333'>Near to the city centre</label></div>
                <div className='div44'><input type='checkbox' id='check444' /> <label htmlFor='check444'>I have a car</label></div>
                <div className='div55'><input type='checkbox' id='check555'/> <label htmlFor='check555'>I want to use the subway/underground.</label></div>
            </div>

            <div className='div-iii'>
                <label>Hotel Preference</label>
                <input type='text' placeholder='Hotel name' />
            </div>

            <div className='div-iii'>
                <label>Note</label>
                <textarea />
            </div>
            

        </div>
        <div className='div3'>
            <p className='p1'>Requesting quotation is NOT a booking yet, you will have to wait for our 
            response with confirmation of availability and prices for your request.</p>
            <p className='p2'>click proceed to set dates and complete request</p>
            <button className='proceedBtn' >Proceed Request</button>
        </div>

    </div>
  )
}

export default Proceed