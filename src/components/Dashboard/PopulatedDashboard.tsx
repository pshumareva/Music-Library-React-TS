import React from 'react'

function PopulatedDashboard(props: any) {
 return (
  <div>
   {props.assets.map((asset: any) => {
    // Notice the TS errors ? Hint: Assets have to be typed ;)
    return (
     <>
      <li className="card">
       <img src={asset.imageUrl} alt="travis" />
       <p>
        <strong>Singer/Band: </strong>
        <span className="singer">{asset.singer}</span>
       </p>
       <p>
        <strong>Album name: </strong>
        <span className="album">{asset.album}</span>
       </p>
       <p>
        <strong>Sales:</strong>
        <span className="sales">{asset.sales}</span>
       </p>
       <a className="details-btn" id={asset._id}>
        Details
       </a>
      </li>
     </>
    );
   })}
  </div>
 )
}

export default PopulatedDashboard
