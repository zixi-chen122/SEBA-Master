import React from 'react'
import './PopupWrite.css'
function PopupWrite(props){
  return(props.trigger)?(
    <div className="popup">
        <div className ="popup-inner">
        <button className ="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
        {props.children}
        </div>
    </div>): "";
}

export default PopupWrite
