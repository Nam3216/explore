import React,{useEffect,useState} from "react"
import MockInit from "../Mock/MockInit"
import InterfaceInit from "../Interface/Interface"
import {Link} from "react-router-dom"
import "./styleInitCard.css"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button'
import axios, { Axios } from "axios"
import db from "../../firebase"
import {collection,getDocs} from "firebase/firestore"
//import { ProductionQuantityLimits } from "@mui/icons-material"


const InitCard=()=>{
    const[list,setList]=useState<InterfaceInit[]>([])
    const[list1,setList1]=useState<any[]>([])//para entrar por firestore mejor any
    const[checkOnMouse,stateCheckOnMouse]=useState(0)
    const Navigate=useNavigate()
//axios o fetch andan ok
    /*const GetApi=async ()=>{
        try{

            const items=await axios.get("http://localhost:3000/init")
            const itemsData=items.data
            console.log(itemsData,"items")

        }catch(err){
            console.log(err)
        }
        
    }*/

  /*  const GetApi=()=>{
        fetch("http://localhost:3000/init")
        .then((response)=>{
            return response.json()
        })
        .then((list)=>{
            setList1(list)
            console.log(list,"list")
        })
    }*/

  /*  useEffect(()=>{
        GetApi()
    },[])*/
   /* const GetList=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                return resolve(MockInit)
            },2000)
        })
    }
    useEffect(()=>{
        GetList().then((list:any)=>{
            setList(list)
        })
    },[])*/

    const GetListFirestore= async()=>{
        const itemsCollection=collection(db,"init")
       
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
   
  

    const handleOnMouseDelay=(id:number)=>{
        setTimeout(()=>{
            handleOnMouse(id)
        },.5)
    }
    const handleOnMouse=(id:number)=>{
        
        stateCheckOnMouse(id)
               
    }

    const handleOnMouseLeave=()=>{
        stateCheckOnMouse(0)
    }

    return(
        <div className="init-container">
            {list1.map((item:any)=>{
                return(
                        <div className="init-item-container">
                            <div className="init-item" style={{backgroundImage:`url(${item.img})`,backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'}} onMouseOver={()=>handleOnMouseDelay(item.id)} onMouseLeave={handleOnMouseLeave} onClick={()=>Navigate(`/init/${item.destiny}`)}>
                                {checkOnMouse == item.id && (
                                <div className="init-item-link">
                                    <p style={{fontSize:30}}>{item.destiny} </p> 
                                </div>
                                )}
                            </div>
                            <div className="init-item-destination">
                                
                             <Link to={`/trips/${item.destiny}`}><Button size="small" variant="contained" id="first-link">TRIPS</Button></Link>
                              <Link to={`/excursions/${item.destiny}`}><Button size="small" variant="contained"> EXCURSIONS</Button></Link>
                            </div>  
                        </div>
                        
                        
                        )
            })}

        </div>
    )



}

export default InitCard