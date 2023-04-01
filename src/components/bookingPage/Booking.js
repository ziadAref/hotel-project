import React from 'react'

import img1 from '../../images/Hotel Photo.png'



const Booking = () => {
  return (
    <div className='booking'>
        <div className='left'>




            <div className='div1'>
                    <label>Contact Details</label>
                <form>
                    <input className='fn' type='text' placeholder='First name' />
                    <input className='ln' type='text' placeholder='Last name' />
                    <input className='em' type='email' placeholder='Email' />
                    <input className='cc' type="number" placeholder='GE' />
                    <input className='phn' type='tel' placeholder='Phone number' />
                </form>
            </div>

            <div className='div2'>
                <label>Room List</label>
                <div className='room1'>
                    <div className='left-div'>
                        <div className='left-div-text'>
                            Room1
                        </div>
                    </div>

                    <div className='right-div'>

                        <div className='top-right-div'>

                            <div>
                                <p className='p1'>Single Use Room</p>
                                <p className='p2'>x1 guest per room</p>
                            </div>
                            <a href='#'>Remove</a>
                        </div>

                        <div className='center-right-div'>

                            <form>
                                <input className='input1' type="text" placeholder='First name'/>
                                <input className='input2' type="text" placeholder='Last name'/>
                                <input className='input3' type="date" placeholder='Dates'/>
                            </form>



                        </div>

                        <div className='bottom-right-div'>
                            <input type='checkbox' id='z' /><label id='checkme' htmlFor="z">Guest name is not confirmed yet.</label>
                        </div>

                    </div>
                </div>
                <div className='room2'>
                <div className='left-div'>
                        <div className='left-div-text'>
                            Room2
                        </div>
                    </div>

                    <div className='right-div'>

                        <div className='top-right-div'>

                            <div>
                                <p className='p1'>Double Use Room</p>
                                <p className='p2'>x2 guest per room</p>
                            </div>
                            <a href='#'>Remove</a>
                        </div>

                        <div className='center-right-div'>

                            <form>
                                <input className='input1' type="text" placeholder='First name'/>
                                <input className='input2' type="text" placeholder='Last name'/>
                                <input className='input3' type="date" placeholder='Dates'/>
                            </form>



                        </div>

                        <div className='bottom-right-div'>
                            <input type='checkbox' id='zz' /><label id='checkme' htmlFor="zz">Guest name is not confirmed yet.</label>
                        </div>

                    </div>

                </div>
                <div className='room3'>
                <div className='left-div'>
                        <div className='left-div-text'>
                            Room3
                        </div>
                    </div>

                    <div className='right-div'>

                        <div className='top-right-div'>

                            <div>
                                <p className='p1'>Double Use Room</p>
                                <p className='p2'>x2 guest per room</p>
                            </div>
                            <a href='#'>Remove</a>
                        </div>

                        <div className='center-right-div'>

                            <form>
                                <input className='input1' type="text" placeholder='First name'/>
                                <input className='input2' type="text" placeholder='Last name'/>
                                <input className='input3' type="date" placeholder='Dates'/>
                            </form>



                        </div>

                        <div className='bottom-right-div'>
                            <input type='checkbox' id='zzz' /><label id='checkme' htmlFor="zzz">Guest name is not confirmed yet.</label>
                        </div>

                    </div>


                </div>
            </div>
            <div className='div3'>
                <form>
                    <label>Notes <span>(optional)</span></label>
                    <textarea />
                </form>
            </div>
            <div className='div4'>
                <label>Request Policy</label>
                <ul>
                    <li>I understand that submitting a request is not making a booking.</li>
                    <br></br>
                    <li> We will validate availability for the requested rooms and dates and get back to you s soon as possible by email with final quotation.</li>
                </ul>
                <button className='submitRequestBtn'>Submit Request</button>
            </div>




        </div>




        <div className='right productOverView'>
            <img src={img1}/>
            <p className='stars'>* * * * *</p>
            <h2>Maritim Hotel Frankfurt</h2>
            <p className='p1'>
                Theodor-Heuss-Allee 3, Westend, 60486 
                Frankfurt/Main, Germany
            </p>
        </div>




    </div>
  )
}

export default Booking