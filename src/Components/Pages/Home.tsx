import React,{useEffect,useState} from "react"
import InitCard from "../InitCard/InitCard"
import "./styleHome.css"
import InitTitle from "../Title/InitTitle"
import Experiences from "../Experiences/Experiences"
import Slide from "./slide"
import CarouselOk from "./Carousel"



const Home=()=>{
   

    return(
        <div className="home-container">
            <div >
                <div className="home-title"></div>
                <div className="home-init-container">
                    <div className="init-home">
                    <h3 style={{color:"white", marginBottom:50}}></h3>
                        <InitCard/>
                    </div>
                  
                </div>
            </div>
            <div className="experiences-home">
                <h3 style={{color:"white", marginBottom:50}}></h3>
                <Experiences msg="home"/>
            </div>


        </div>
    )


}

export default Home