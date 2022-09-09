import React,{useEffect,useState} from "react"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./styleLogin.css"

const Login=()=>{
    const[userInfo,setUserInfo]=useState({user:"",password:""})
    const[list,setList]=useState<any>([])
    const[notSuccess,setNotSuccess]=useState(false)
    const[success,setSuccess]=useState(false)
    const[badPassword,setBadPassword]=useState(false)

    const handleInput=(e:any)=>{
        e.preventDefault()
        console.log(e.target.value, "value")
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
        
    }

  

    const handleSend=()=>{
        //cada vez q hace click se reinicia a false todos los estados para q no muestra msj anterior
        setBadPassword(false)
        setNotSuccess(false)
        setSuccess(false)

        setList([...list,userInfo])//agrego a state list el userinfo
        let listOka:any=[]//aca guarda userInfo, sino el state se actualiza desp
        let listLocal:any=[]//aca guarda la lista del localstorage si ya habia algo de antes
        let check:boolean=false//para comprobacion 
        let checkUser=false//para comprobacion
        

        listOka.push(userInfo)
        console.log(listOka, "userifo")

        //si no es undefined, si tiene algo, lo traigo
        if(localStorage.getItem("users")!=undefined){
            listLocal=JSON.parse(localStorage.getItem("users")!)//pongo ! para demostrar que no es null, sino tiraba error
            console.log(listLocal, "listlocal")
        //lo itero y busco coincidencia en user            
           for(const item of listLocal){
            if(item.user===userInfo.user){
                if(item.password===userInfo.password){
                    check=true
                }else{
                    checkUser=true
                    setBadPassword(true)
                }
                
               
            }
           }
          //si hay coincidencia, que tire ya esta 
           if(check==true){
            setSuccess(true)    
            }
            //si no hay que lo  guarde en local, agregando lo q ya estaba en la lista
            else{
               if(checkUser==false){
                setNotSuccess(true)
               }
                
            }
        }else{
          //si es undefined, es q no hay nada, que guarde usuario de una  
            localStorage.setItem('users', JSON.stringify(listOka))
            setSuccess(true)
        }
        
     
        
    }

    return(
        <div className="login-container">
            <p>Log in</p>
            <div className="login-form">
                <p>Write down your username</p>
                <input type="text" name="user" onChange={handleInput} />
                <p>Write down your password</p>
                <input type="text" name="password" onChange={handleInput} />
                <Button variant="contained" onClick={handleSend}>Send</Button>
                <Button variant="contained">I forgot my password</Button>
            </div>
            {success && <p>Success! You are loged in</p>}
            {badPassword && <p>Your password is incorrect, try again</p>}
            {notSuccess && <p>You are not registered. Please <Link to={"/register"}>Register</Link> </p>}

        </div>

    )
}

export default Login