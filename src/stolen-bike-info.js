import React from 'react'

function StolenBike(props) {
  return (
    <div>
       <div className='stolen-bike'>
      
      <img className='byke_info_image' src={props.image2} alt=""/>
        <div className='byke_info'>
            <a href="">{props.title}</a>
      <strong>Serial:<code> {props.serial}</code></strong>
      <strong>Primary colors:<span>{props.pcolor}</span></strong>
        <div className='bike_loc'>
        <strong>STOLEN: <span>{props.stolen}</span></strong>
        <strong>Location: <span>{props.location}</span></strong>

        </div>
        
        </div>


       </div>


    </div>
  )
}

export default  StolenBike;
