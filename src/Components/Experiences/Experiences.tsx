import React from "react";
import Avatar from '@mui/material/Avatar';
import "./styleExperiences.css"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Experiences=({msg}:any)=>{
    const Navigate=useNavigate()
    const img1="/experiences.png"
    return(
        <div className="experiences-container">
              <div className="trip-title"           
            style={{backgroundImage: `url(${img1})`, 
            backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >  </div>
            <div className="experiences-container2">
                <div className="experiences-img">
                    <img src="launch2.jpg" alt="loading"/>
                </div>
                <div className="experiences-text">
                    <div className="experiences-text-p">
                        <p>The launch was something spectacular. I never thought I would have so much fun in my life. And the view you have once you reach orbit...from another world....</p>
                    </div>
                    <div className="avatar">
                        <Avatar alt="Travis Howard" src="face1.gif" sx={{ width: 100, height: 100 }} />
                    </div>
                </div>
            </div>
            <div className="experiences-container2">
                <div className="experiences-img">
                    <img src="https://www.worldatlas.com/r/w1300-q80/upload/bb/c3/32/shutterstock-1041249343.jpg" alt="loading"/>
                </div>
                <div className="experiences-text">
                    <div className="experiences-text-p">
                        <p>
                        I bought the package to Mars. At first I had my doubts, but as soon as I reached Earth's orbit, all my fears disappeared. And Mars...it's spectacular! It's been 3 years since my trip and not a single day goes by that I don't remember something about it. Do it, don't miss it!</p>
                    </div>
                    <div className="avatar">
                        <Avatar alt="Travis Howard" src="face1.gif" sx={{ width: 100, height: 100 }} />
                    </div>
                
                </div>
            </div>
            {msg =="home" &&
            <Button size="small" variant="contained" onClick={()=>Navigate("/experiences")} >More experiences... </Button>
                }
            {msg!="home" && (
                 <div className="experiences-container2">
                 <div className="experiences-img">
                     <img src="kepler.jpg" alt="loading"/>
                 </div>
                 <div className="experiences-text">
                     <div className="experiences-text-p">
                         <p>
                         
The truth is that I still can't get out of my amazement... my trip to deep space was something that changed me. Everything is so huge...and we are so small...excuse me, I have no words to describe it. It's more than an adventure... it's another dimension...</p>
                     </div>
                     <div className="avatar">
                         <Avatar alt="Travis Howard" src="face1.gif" sx={{ width: 100, height: 100 }} />
                     </div>
                 
                 </div>
             </div>


            )}
        </div>
    )
}

export default Experiences