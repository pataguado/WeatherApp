import React from 'react';


const Weather = props =>  {
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${props.id}.svg`;
    return(
        <div className="weather__info">
            { props.id && <img className='icon' src={icon} alt={props.id}/>}
            { props.city &&  <p className="weather__key"> Location: <span className="weather__value">{props.city}, {props.country} </span></p>}
            { props.error && <p className="weather__error">{props.error}</p> }
            { props.description &&           <p className="weather__key"> Description: <span className="weather__value" id='cap'>{props.description} </span></p>}
            { props.temperature &&           <p className="weather__key">Temperature: <span className="weather__value">{props.temperature}</span></p> } 
            { props.humidity &&              <p className="weather__key">Humidity: <span className="weather__value">{props.humidity} </span> </p> }
            
        </div>    
)}
    

export default Weather;