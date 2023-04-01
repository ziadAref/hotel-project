import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <form>
        

            <div className='hotelName'>
                <label>Hotel name</label>
                <i className="fa-solid fa-magnifying-glass"></i>                
                <input type='text' placeholder='Filter by hotel name'  />
            </div>

            <div className='popularFilter'>
                <label>Popular Filters</label>
                <div className='div1'><input type='checkbox' id='check1' /> <label htmlFor='check1'>Free cancellation</label></div>
                <div className='div2'><input type='checkbox' id='check2'/> <label htmlFor='check2'>Breakfast included</label></div>
            </div>

            <div className='priceFilter'>
                <label>Price (per room, per night)</label>
                <input className='ranger' type="range" />
                <div className='min-and-max'>
                    <div className='min'>
                        <label>MIN</label><br></br>
                        <input type="text" placeholder='$ 35.00' />
                    </div>
                    <div className='max'>
                        <label>MAX</label><br></br>
                        <input type="text" placeholder='$ 525.00' />
                    </div>
                </div>
            </div>

            <div className='locationFilter'>
                <label>Location</label>
                <div className='div3'><input type='checkbox' id='check3' /> <label htmlFor='check3'>Walking distance</label></div>
                <div className='div4'><input type='checkbox' id='check4' /> <label htmlFor='check4'>Non-stop public transportation </label> </div>
                <div className='div5'><input type='checkbox' id='check5' /> <label htmlFor='check5'>1 Stop public transportation</label> </div>
                <div className='div6'><input type='checkbox' id='check6' /> <label htmlFor='check6'>City centre properties</label> </div>
            </div>

            <div className='ratingFilter'>
                <label>Star rating</label>
                <div className='div7'><input type='checkbox'  id='check7' /> <label htmlFor='check7'>* * * * *</label></div>
                <div className='div8'><input type='checkbox'  id='check8' /> <label htmlFor='check8'>* * * *</label></div>
                <div className='div9'><input type='checkbox'  id='check9' /> <label htmlFor='check9'>* * *</label></div>
                <div className='div10'><input type='checkbox' id='check10'/> <label htmlFor='check10'>* *</label></div>
                <div className='div11'><input type='checkbox' id='check11'/> <label htmlFor='check11'>*</label></div>
                <div className='div12'><input type='checkbox' id='check12'/> <label htmlFor='check12'>Unrated</label></div>    
            </div>

            <div className='popularAmen'>
                <label>Popular amenities</label>
                    <div className='div13'><input type='checkbox' id='check13' /> <label htmlFor='check13'>Air conditioning</label></div>
                    <div className='div14'><input type='checkbox' id='check14' /> <label htmlFor='check14'>Resturant</label></div>
                    <div className='div15'><input type='checkbox' id='check15' /> <label htmlFor='check15'>Parking</label></div>
                    <div className='div16'><input type='checkbox' id='check16' /> <label htmlFor='check16'>Gym</label></div>
                    <div className='div17'><input type='checkbox' id='check17' /> <label htmlFor='check17'>Spa</label></div>
                    <div className='div18'><input type='checkbox' id='check18' /> <label htmlFor='check18'>Free WiFi</label></div>    
                    <div className='div19'><input type='checkbox' id='check19' /> <label htmlFor='check19'>Airport shuttle</label></div>    
                    <div className='div20'><input type='checkbox' id='check20' /> <label htmlFor='check20'>Pool</label>    </div>
                    <div className='div21'><input type='checkbox' id='check21' /> <label htmlFor='check21'>Wheelchair accessible</label>    </div>
            </div>

        </form>
    </div>
  )
}

export default Sidebar