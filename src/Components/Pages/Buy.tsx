import React,{useEffect, useState} from "react";
import { useContext } from "react";
import { ContextItems } from "../../Context/Context";
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./styleBuy.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Buy=()=>{
    const{cartItem}=useContext(ContextItems)
    const[userInfo,setUserInfo]=useState({name:"",document:"",credit:""})
    //const[checkConfirm,setCheckConfirm]=useState(false)
    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
    console.log(cartItem, "by")

    const handleInput=(e:any)=>{
        e.preventDefault()
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
    }
    
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        console.log(userInfo, "userinfo")
        cartItem.passengers=1//para q despues de comprado vuelva a 1 pasj
    }

    const handleConfirm=()=>{
        handleOpen()
    }
  
    return(
        <div className="buy-container">
            <div className="detail-item"  >
                <img src={cartItem.img} alt="cargando"/>
                {cartItem.category=="trips" ? (
                    <div className="detail-item-info">
                    
                         <p>Destination: {cartItem.destiny}  </p>
                         
                         <p>Transport: {cartItem.transport} </p>
                         <p>Hotel: {cartItem.hotel} </p>
                         <p>Length of Stay: {cartItem.stay} </p>
                         <p>Passengers: {cartItem.passengers} </p>
                         <p>Just for $ {cartItem.price * cartItem.passengers} </p>
                                            
                     </div>

                ) : (
                    <div className="detail-item-info">
                    
                         <p>Destination: {cartItem.destiny}  </p>
                         
                         <p>Description: {cartItem.description} </p>
                      
                         <p>Passengers: {cartItem.passengers} </p>
                         <p>Just for $ {cartItem.price * cartItem.passengers} </p>
                                            
                     </div>
                )}
           

            

            </div>
            <div className="buy-form-container">
                <h4>Register your infomation and confirm your purchase</h4>
                <form onSubmit={handleSubmit} className="buy-form" >
                    <label htmlFor="name">Write down your name</label>
                    <input type="text" name="name" onChange={handleInput}/>
                    <label htmlFor="email">Write down your email</label>
                    <input type="text" name="email" onChange={handleInput}/>
                    <label htmlFor="document">Write down your document</label>
                    <input type="text" name="document" onChange={handleInput}/>
                    <label htmlFor="credit">Write down your credit card number</label>
                    <input type="text" name="credit" onChange={handleInput}/>
                    <button type="submit" onClick={handleConfirm}>Confirm </button>
                    
                </form>
            </div>
            <div>
                
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        The transactions was succesfull!. Ticket number: 19209
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You will receive a confirmation email soon. 
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {cartItem.category=="trips" ? <p style={{color:"black"}}>You have just bought a trip to {cartItem.destiny}. Now it is time to check for an excursion!</p> : <p style={{color:"black"}}>You have just bought an excursion in {cartItem.destiny}. Now it is time to check for a trip!</p>}
                    </Typography>
                    <Link to={cartItem.category=="trips" ? `/excursions/${cartItem.destiny}`: `/trips/${cartItem.destiny}`}><Button>Check more products!</Button></Link>
                    </Box>
                </Modal>
            </div>
         
            



        </div>
    )
}

//en confirm puse link, si confirma y compra, va a la otra categopria del mismo destino. Ej, compro un trip a marte, le ofrezo una excursion a marte. si compro la excursion, le ofreczo trip

export default Buy