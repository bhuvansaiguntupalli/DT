import React from 'react'
function Travel() {
    const busData = [
        { busno: 280, start: 'secunderabad', destination: 'uppal' },
        { busno: 345, start: 'uppal', destination: 'secunderabad' },
        { busno: 123, start: 'koti', destination: 'ameerpet' },
        { busno: 789, start: 'ameerpet', destination: 'koti' },
        { busno: 456, start: 'gachibowli', destination: 'hitech city' },
        { busno: 101, start: 'hitech city', destination: 'gachibowli' },
        { busno: 555, start: 'lb nagar', destination: 'paradise' },
        { busno: 222, start: 'paradise', destination: 'lb nagar' },
        { busno: 777, start: 'kukatpally', destination: 'dilsukhnagar' },
        { busno: 888, start: 'dilsukhnagar', destination: 'kukatpally' }
    ];
    return (
        <div>
            <h1>BUSES AVAILABLE IN YOUR AREA</h1>
            <div className="row pt-5">
               { busData.map((e)=><div className="col-sm-12 col-md-4 col-lg-4 p-3">
               <div className="card " style={{height:'15rem'}}>
  <div className="card-body" >
      <div className="titlecov">
    <h5 className="card-title" style={{textDecoration: 'none'}}>{e.busno}</h5>
    </div>
    <h3 className="card-text" style={{textDecoration: 'none'}}>START: {e.start}</h3>
    <h3 className="card-text" style={{textDecoration: 'none'}}>END: {e.destination}</h3>
  </div>
</div>
               </div>)}
            </div>
        </div>
    )
}

export default Travel
