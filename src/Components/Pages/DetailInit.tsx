import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import MockInit from "../Mock/MockInit";
import InterfaceInit from "../Interface/InterfaceInit";
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import "./styleDestinyInit.css"

const DetailInit=()=>{
    const[list,setList]=useState<InterfaceInit[]>([])
    const{destination}=useParams()

    let img1="/earthok.gif"
    let img2="/moonok.gif"
    let img3="/mars1.gif"
    let img4="/deepspaceok.gif"

    const GetMockList=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                return resolve(MockInit)
            },2000)
        })
    }

    useEffect(()=>{
        GetMockList().then((list:any)=>{
            setList(list)
        })
    },[])

    return(
        <div className="item-destiny-container">
           {destination=="Orbit" && <img src={img1} id="img-init"/>}
           {destination=="Moon" && <img src={img2} id="img-init"/>}
           {destination=="Mars" && <img src={img3} id="img-init"/>}
           {destination=="Deep Space" && <img src={img4} id="img-init"/>}
            {list.map((item:any)=>{
                if(item.destiny==destination){
                    return (
                        <div className="item-destiny-init">
                            <div className="item-destiny-init-img">
                                <img src={item.img} alt="loading"/>
                                <img src={item.img2} alt="loading"/>
                            </div>
                            <div className="item-destiny-init-text"> 
                                <h3>{item.destiny} </h3>
                                <p>{item.description} </p>
                                <div className="links-container">
                                    <Link to={`/trips/${item.destiny}`}><Button variant="outlined" id="first-link">TRIPS</Button></Link>
                                    <Link to={`/excursions/${item.destiny}`}><Button variant="outlined"> EXCURSIONS</Button></Link>
                               </div>
                            </div>
                        </div>
                    )
                }
            })} 
        </div>
    )


}

export default DetailInit
