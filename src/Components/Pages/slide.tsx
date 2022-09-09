import React from "react"
import "rs-slide-menu"

const Slide=()=>{


    return(
        <>
        <div id="nav">
            <div className="m-menu_item">
                <a href="#">Shop</a>
            </div>
        
            <div className="m-menu_item">
                <a href="#">About</a>
            </div>
        
            <div className="m-menu_item">
                <a href="#">Contacts</a>
            </div>
        </div>
        
        <button className="js-open-nav">Open</button>
        
 
        
        </>
    )
}

export default Slide