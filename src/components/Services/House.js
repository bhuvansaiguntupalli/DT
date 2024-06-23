import React from 'react'

function House() {
    const data = [
        { address: 'hno. B/520 Malaysian Township', pincode: '500098', city: 'Kukatpally', image: 'https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?s=612x612&w=0&k=20&c=js1jfd6IVIbdfSIwYHW4wlD420WtSSikolVjzFBQ2Qk=' },
        { address: 'Example Address 2', pincode: '123456', city: 'City 2', image: 'https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?s=612x612&w=0&k=20&c=js1jfd6IVIbdfSIwYHW4wlD420WtSSikolVjzFBQ2Qk=' },
        { address: 'Example Address 3', pincode: '789012', city: 'City 3', image: 'https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?s=612x612&w=0&k=20&c=js1jfd6IVIbdfSIwYHW4wlD420WtSSikolVjzFBQ2Qk=' },
        { address: 'Example Address 4', pincode: '345678', city: 'City 4', image: 'https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?s=612x612&w=0&k=20&c=js1jfd6IVIbdfSIwYHW4wlD420WtSSikolVjzFBQ2Qk=' },
        { address: 'Example Address 5', pincode: '901234', city: 'City 5', image: 'https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?s=612x612&w=0&k=20&c=js1jfd6IVIbdfSIwYHW4wlD420WtSSikolVjzFBQ2Qk=' },
        { address: 'Example Address 6', pincode: '567890', city: 'City 6', image: 'https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?s=612x612&w=0&k=20&c=js1jfd6IVIbdfSIwYHW4wlD420WtSSikolVjzFBQ2Qk=' },
        { address: 'Example Address 7', pincode: '345678', city: 'City 7', image: 'https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?s=612x612&w=0&k=20&c=js1jfd6IVIbdfSIwYHW4wlD420WtSSikolVjzFBQ2Qk=' },
        { address: 'Example Address 8', pincode: '901234', city: 'City 8', image: 'https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?s=612x612&w=0&k=20&c=js1jfd6IVIbdfSIwYHW4wlD420WtSSikolVjzFBQ2Qk=' },
        { address: 'Example Address 9', pincode: '567890', city: 'City 9', image: 'https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?s=612x612&w=0&k=20&c=js1jfd6IVIbdfSIwYHW4wlD420WtSSikolVjzFBQ2Qk=' },
        { address: 'Example Address 10', pincode: '345678', city: 'City 10', image: 'https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?s=612x612&w=0&k=20&c=js1jfd6IVIbdfSIwYHW4wlD420WtSSikolVjzFBQ2Qk=' }
    ];
    return (
        <div>
             <h1>HOUSES AVAILABLE IN YOUR AREA</h1>
            <div className="row pt-5">
               { data.map((e)=><div className="col-sm-12 col-md-4 col-lg-4 p-3">
               <div className="card " style={{height:'28rem'}}>
  <img className="card-img-top" src={e.image} alt=""/>
  <div className="card-body" >
      <div className="titlecov">
    <h5 className="card-title" style={{textDecoration: 'none'}}>{e.address}</h5>
    </div>
    <h3 className="card-text" style={{textDecoration: 'none'}}>{e.city}</h3>
    <h4>{e.pincode}</h4>
  </div>
</div>
               </div>)}
            </div>
        </div>
    )
}

export default House
