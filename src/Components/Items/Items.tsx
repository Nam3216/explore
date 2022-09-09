import { SlowBuffer } from "buffer"
import React,{useState} from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ContextItems } from "../../Context/Context"
import ItemCount from "../ItemCount/ItemCount"
import "./styleItems.css"

interface dataReceived{
    data:{
        id: number,
        destiny: String,    
        price: number,
        offer: String,
        transport: String,
        stay: String,
        hotel: String,
        type: String,
        description:
        String,
        category: String,
        img:string,
        passengers: number,
    },
    msg:string
}

const Items=({data,msg}:dataReceived)=>{
    const{id,destiny,price,offer,transport,stay,hotel,type,description,category,img,passengers}=data
    const{GetCartItem}=useContext(ContextItems)

    const[passengersOk,setPassengersOk]=useState(0)

    let img1="/earthok.gif"
    let img2="/moonok.gif"
    let img3="/mars1.gif"
    let img4="/deepspaceok.gif"

//<input type="number"  onChange={handleValue} />

    const handleGet=(count:number)=>{
        
        GetCartItem(data, count)
    }

    return(
       <>
        {msg=="category" ? 
        (<Link to={`/category/${category}/detail/${id}`} >
            <div className="category-item" key={id} >
                <div className="category-item-ok">
                    
                    <img src={img} alt="cargando"/>
                    <div className="category-item-text">
                        <p>Desination: {destiny} </p>
                        <p>Transport: {transport} </p>
                        <p>Hotel: {hotel} </p>
                        <p>Lenght: {stay} </p>
                        <p>Price: {price} </p>
                    </div>
                </div>
                

            </div>
        </Link>):(
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

            <div className="detail-item" key={id} >
                <img src={img} alt="cargando"/>
                <div className="detail-item-info">
                    <div className="detail-item-info-ok">
                        <p>Destiny: {destiny} </p>
                        <p>{description} </p>
                        <p>Transport: {transport} </p>
                        <p>Hotel: {hotel} </p>
                        <p>Length of Stay: {stay} </p>
                        <p>Just for $ {price} </p>
                    </div>
                    
                     <ItemCount initial={passengers} handleGet={handleGet} />
                    
                </div>
            

            </div>
            </>
        )}
      </>
        
    )

}

export default Items