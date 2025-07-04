import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
export default function Cards(props) {

  
  return (
    <>
        <div className='card' onClick={props.togel}>
            <div>
                <img src={props.imgUrl} key={props.imgUrl}></img>
                <div className='rid'>Room number {props.id}</div>
            </div>
            <div>
                <h4>Room Type {props.type} 
                    <span className='status'>Status <FontAwesomeIcon style={{color: props.status === 'available' ? 'lime' : 'red'}} icon={faCircle} /></span>
                </h4>
                <div className='price'>price {props.price}</div>
            </div>
        </div>
    </>
  )
}
