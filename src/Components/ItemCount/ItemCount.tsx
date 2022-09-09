import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./styleItemCount.css"
import Button from '@mui/material/Button';

interface InterfaceCount{
    initial:number,
    handleGet:(count:number)=>any
}

const ItemCount=({initial,handleGet}:InterfaceCount)=>{
    const[count,setCount]=useState(initial)


    const add=()=>{
        setCount(count+1)
    }

    const substract=()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    

    return(
        <div className="itemcount">
            <p>Passengers: </p>
            <p> {count}</p>
            <p onClick={substract} className="button-op"> -</p>
            <p onClick={add} className="button-op"> +</p>
          <Link to={"/buy"}>  <Button variant="contained" onClick={()=>handleGet(count)}>Lets do it!</Button></Link>
        </div>
    )
}

export default ItemCount