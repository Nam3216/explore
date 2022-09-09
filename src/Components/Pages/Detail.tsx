import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import MockTrips from "../Mock/MockTrips";
import InterfaceMockSpace from "../Interface/Interface"
import Items from "../Items/Items";
import ItemsExcursion from "../Items/ItemsExcursion";
import "./styleDetail.css"
import MockExcursion from "../Mock/MockExcursion";
import db from "../../firebase";
import {collection,getDocs} from "firebase/firestore"

const Detail=()=>{
    //const[list,setList]=useState<InterfaceMockSpace[]>([]) si uso mock
    const[list1,setList1]=useState<any[]>([])
    
    const{id}=useParams()
    const{category}=useParams()
//a la url de detail le paso tb la category si es trips o excursions. la tomo con params y veo si obtengo la lista de trips o excursion. en jsx tb, si es trips llamo a items. si es excursions, llamo a itemssexcursion
    /*const GetListMock=()=>{
        if(category=="trips"){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    return resolve(MockTrips)
                },2000)
            })
        }else {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    return resolve(MockExcursion)
                },2000)
            })
        }

        
    }

    useEffect(()=>{
        GetListMock().then((list:any)=>{
            setList(list)
        })
    },[])*/

    const GetListFirestore= async()=>{
        if(category=="trips"){
            const itemsCollection=collection(db,"trips")
        
            const itemsSnapshot=await getDocs(itemsCollection)
            console.log(itemsSnapshot,"itme")
            const itemList=itemsSnapshot.docs.map((doc)=>{
            
                let item=doc.data()
                item.id=doc.id
                console.log(item, "item")
                return item
            })
            setList1(itemList)
        }else {
            const itemsCollection=collection(db,"excursions")
        
            const itemsSnapshot=await getDocs(itemsCollection)
            console.log(itemsSnapshot,"itme")
            const itemList=itemsSnapshot.docs.map((doc)=>{
            
                let item=doc.data()
                item.id=doc.id
                console.log(item, "item")
                return item
            })
            setList1(itemList)
        }
    
        //console.log(itemList,"ok")
        
        //return itemList
       

    }

    useEffect(()=>{
     GetListFirestore()
   
        
    },[])
    console.log(list1, "list")
    return(
        <div className="detail-container">
            {list1.map((item:any)=>{
                if(item.id==id){
                    if(item.category=="trips"){
                        return <Items data={item} key={item.id} msg={"detail"} />
                    }
                    else if(item.category=="excursions"){
                        return <ItemsExcursion dataExcursion={item} key={item.id} msg={"detail"}/>
                    }
                    
                }
            })}
        </div>
    )




}

export default Detail
