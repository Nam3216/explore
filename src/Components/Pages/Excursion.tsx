import React,{useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import MockExcursion from "../Mock/MockExcursion"
import InterfaceExcursion from "../Interface/InterfaceExcursion"
import ItemsExcursion from "../Items/ItemsExcursion"
import {collection,getDocs} from "firebase/firestore"
import db from "../../firebase"
import "./styleExcursion.css"

const Excursion=()=>{
    //const[list, setList]=useState<InterfaceExcursion[]>([]) esto si uso mock
    const[list1, setList1]=useState<any[]>([])
    const{destiny}=useParams()

    let img1="/earthok.gif"
    let img2="/moonok.gif"
    let img3="/mars1.gif"
    let img4="/deepspaceok.gif"
    

   /* const GetListExcursion=()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                return resolve(MockExcursion)
            },2000)
        })
    }

    useEffect(()=>{
        GetListExcursion().then((list:any)=>{
            setList(list)
        })
    },[])*/

    const GetListFirestore= async()=>{
        const itemsCollection=collection(db,"excursions")
       
        const itemsSnapshot=await getDocs(itemsCollection)
        console.log(itemsSnapshot,"itme")
        const itemList=itemsSnapshot.docs.map((doc)=>{
          
            let item=doc.data()
            item.id=doc.id
            console.log(item, "item")
            return item
        })
    
        console.log(itemList,"ok")
        
        //return itemList
        setList1(itemList)

    }

    useEffect(()=>{
     GetListFirestore()
   
        
    },[])

    return(
        <div className="excursion-container">
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
    
            {list1.map((item)=>{
                if(item.destiny==destiny){
                    return <ItemsExcursion dataExcursion={item} key={item.id} msg={"excursion"} />
                }

            })}
            
        </div>
    )
}

export default Excursion