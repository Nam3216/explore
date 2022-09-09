import React,{useState,useEffect} from "react"
import Button from '@mui/material/Button'
import "./styleContact.css"

const Contact=()=>{
    const[info, setInfo]=useState({name:"",email:"",comment:""})

    let img1="/contact.png"

    const handleContact=(e:any)=>{
        e.preventDefault()
        setInfo({...info,[e.target.name]:e.target.value})

    }
    console.log(info, "info")

    const handleSend=()=>{
        alert("ok")
        console.log("send")
    }
    return(
        <div className="contact-container">
            <div className="trip-title"  id="trip-title-contact"         
            style={{backgroundImage: `url(${img1})`, 
            backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >  
            hola
            </div>
        <div className="form-contact">
            
            <form onSubmit={handleSend} >
                <div>
                    <label htmlFor="name"><p>Write your name</p></label>
                    <input type="text" name="name" onChange={handleContact} />
                    <label htmlFor="email"><p>Write your email</p></label>
                    <input type="text" name="email" onChange={handleContact}/>
                    <p>Write your comment</p>
                    <textarea name="comment" onChange={handleContact}></textarea>
                </div>
                <Button type="submit" id="button-send">Send</Button>
            </form>
            

        </div>
        </div>
    )
}

export default Contact