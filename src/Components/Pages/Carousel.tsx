import React,{useState,useEffect} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import db from "../../firebase"
import {collection,getDocs} from "firebase/firestore"
import "./styleCarousel.css"
//var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

 

//var DemoCarousel = React.createClass({
//onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
    const CarouselOk=()=>{
        const[list1, setList1]=useState<any[]>([])
        
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

        return (
            <Carousel showArrows={true} autoPlay={true} interval={8000}    transitionTime={5000} infiniteLoop={true}   >
              
                {list1.map((item)=>{

                    return(
                        <div className="carousel-container" style={{objectFit:"cover"}}>
                            <img src={item.img}  />
                        <h4 className="legend">{item.destiny}</h4>
                    </div>
                    )
                })}
             
            </Carousel>
        );
;

}

export default CarouselOk
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

/* <Carousel showArrows={true}  >
                <div>
                    <img src="https://lh3.googleusercontent.com/t8jzr310rC5obgwRHRljXVYqpVt_LwPzoBoBknYxU9QH4sDPlItjYN_IGNbDIaK6d89pVC7XxGM87-QypJ9CmgHXSA=w640-h400-e365-rj-sc0x00ffffff" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="kepler.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="kepler.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="kepler.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="kepler.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="kepler.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>*/