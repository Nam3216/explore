import React,{useState} from "react"
import {createContext} from "react"
import InterfaceMockSpace from "../Components/Interface/Interface"
import Items from "../Components/Items/Items"

const ContextData={
    GetCartItem:(item:any,passengersOk:any)=>item,
    cartItem:{
        id:0,
        destiny:"",
        price: 0,
        offer: "",
        transport: "",
        stay: "",
        hotel: "",
        type: "",
        description:
        "",
        category: "",
        img:"",
        passengers: 0,
        
    }
}

const ContextItems=createContext(ContextData)

interface ChildInterface{
    children:React.ReactNode
}

const Context=({children}:ChildInterface)=>{
    const[cartItem,setCartItem]=useState<any>({})

    const GetCartItem=(data:any,passengersOk:any)=>{
        
        data.passengers=passengersOk//cambia el numero de pasajeros en el mock
        setCartItem(data)
        
       console.log(data, "itm")
    }

    const dataContext={GetCartItem,cartItem}

    return(
        <div>
            <ContextItems.Provider value={dataContext}>
                {children}
            </ContextItems.Provider>
        </div>
    )

}

export {ContextItems}
export default Context
