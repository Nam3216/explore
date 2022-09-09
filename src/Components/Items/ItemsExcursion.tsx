import React from "react";
import {Link} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import {useContext} from "react"
import {ContextItems} from "../../Context/Context"
import "./styleItems.css"

interface dataReceivedExcursion{
    dataExcursion:{
        id:number,
        destiny: string,
        price: number,
        description: string,
        img: string,
        passengers: number,
        special_discount: number,
        category:string,
    },
    msg:string
}
const ItemsExcursion=({dataExcursion,msg}:dataReceivedExcursion)=>{
    const{id,destiny,price,description,img,passengers,special_discount,category}=dataExcursion
    const{GetCartItem}=useContext(ContextItems)

    const handleGet=(count:number)=>{
        GetCartItem(dataExcursion,count)
    }
    let img1="/earthok.gif"
    let img2="/moonok.gif"
    let img3="/mars1.gif"
    let img4="/deepspaceok.gif"

    return(
        <>
            {msg=="excursion" ? (
                <Link to={`/category/${category}/detail/${id}`}>
                <div className="category-item" key={id} >
                    <div className="category-item-ok">
                        <img src={img} alt="loading"/>
                        <div className="category-item-text">
                            <p>{destiny} </p>
                           
                            <p>Price: {price} </p>
                            <p>Passengers: {passengers} </p>
                        </div>
                    </div>
        
        
        
                </div>
                </Link>
            ):(
                <>
                {destiny == "Orbit" && 
                <div className="trip-title"           
                style={{backgroundImage: `url(${img1})`, 
                backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >  </div>}
    
                {destiny == "Moon" && 
                <div className="trip-title"           
                style={{backgroundImage: `url(${img2})`, 
                backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >  </div>}
    
                {destiny == "Mars" && 
                <div className="trip-title"           
                style={{backgroundImage: `url(${img3})`, 
                backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >  </div>}
    
                {destiny == "Deep Space" && 
                <div className="trip-title"           
                style={{backgroundImage: `url(${img4})`, 
                backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >  </div>}
                <div className="detail-item" key={id}>
                     <img src={img} alt="loading"/>
                    <div className="detail-item-info">
                        <div className="detail-item-info-ok">
                            <p>Destination: {destiny} </p>
                            <p>{description} </p>
                            <p>Price: {price} </p>
                        </div>
                        <ItemCount initial={passengers} handleGet={handleGet} /> 
                    </div>
                </div>
                </>
            )}
        </>
       
    )

}

export default ItemsExcursion