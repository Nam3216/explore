import React,{useEffect,useState} from "react"
import MockTrips from "../Mock/MockTrips"
import InterfaceMockSpace from "../Interface/Interface"
import Items from "../Items/Items"
import { useParams } from "react-router-dom"
import "./styleCategory.css"
import {collection,getDocs} from "firebase/firestore"
import db from "../../firebase"

const Trip=()=>{
    //const[list,setList]=useState<InterfaceMockSpace[]>([]) si uso mock
    const[list1, setList1]=useState<any[]>([])
    const{trip}=useParams()
    
    let img1="/earthok.gif"
    let img2="/moonok.gif"
    let img3="/mars1.gif"
    let img4="/deepspaceok.gif"
    
   

    const url="https://www.nasa.gov/sites/default/files/thumbnails/image/rover_tracks_2.jpg"
   /* const GetListMock=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                return resolve(MockTrips)
            },2000)
        })
    }

    useEffect(()=>{
        GetListMock().then((list:any)=>{
            setList(list)
        })
    },[])*/
    const GetListFirestore= async()=>{
        const itemsCollection=collection(db,"trips")
       
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
        <div >
            {trip == "Orbit" && 
            <div className="trip-title"           
            style={{backgroundImage: `url(${img1})`, 
            backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >  </div>}

            {trip == "Moon" && 
            <div className="trip-title"           
            style={{backgroundImage: `url(${img2})`, 
            backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >  </div>}

            {trip == "Mars" && 
            <div className="trip-title"           
            style={{backgroundImage: `url(${img3})`,
            backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >  </div>}

            {trip == "Deep Space" && 
            <div className="trip-title"           
            style={{backgroundImage: `url(${img4})`, 
            backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >  </div>}
           
            {list1.map((item:any)=>{
                if(item.destiny==trip){
                    return <Items data={item} key={item.id} msg={"category"} />
                }
               
            })}
            
        </div>
    )

}

export default Trip