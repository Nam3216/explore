import React,{useState} from "react"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./styleLogin.css"



const Register=()=>{
    const[userInfo,setUserInfo]=useState({user:"",password:""})
    const[list,setList]=useState<any>([])
    const[check,setCheck]=useState(false)
    const[success,setSuccess]=useState(false)

    const handleInput=(e:any)=>{
        e.preventDefault()
        console.log(e.target.value, "value")
        setUserInfo({...userInfo,[e.target.name]:e.target.value})
        
    }

  

    const handleSend=()=>{
        setCheck(false)
        setSuccess(false)
        setList([...list,userInfo])
        let listOka:any=[]//aca guarda userInfo, sino el state se actualiza desp
        let listLocal:any=[]//aca guarda la lista del localstorage si ya habia algo de antes
        let check:boolean=false//para comprobacion 

        listOka.push(userInfo)
        console.log(listOka, "userifo")

        //si no es undefined, si tiene algo, lo traigo
        if(localStorage.getItem("users")!=undefined){
            listLocal=JSON.parse(localStorage.getItem("users")!)//pongo ! para demostrar que no es null, sino tiraba error
            console.log(listLocal, "listlocal")
        //lo itero y busco coincidencia en user            
           for(const item of listLocal){
            if(item.user===userInfo.user){
                check=true
               
            }
           }
          //si hay coincidencia, que tire ya esta 
           if(check==true){
            setCheck(true)     
            }
            //si no hay que lo  guarde en local, agregando lo q ya estaba en la lista
            else{
                let listLocalOka=listLocal.concat(listOka)//concateno las dos listas
                console.log(listOka,"listlocaloka")
                localStorage.setItem('users', JSON.stringify(listLocalOka))
                setSuccess(true)
            }
        }else{
          //si es undefined, es q no hay nada, que guarde usuario de una  
            localStorage.setItem('users', JSON.stringify(listOka))
            setSuccess(true)
        }
        
        
        
    }

    return(
        <div className="login-container">
            <p>Register</p>
            <div className="login-form">
                <p>Write down your username</p>
                <input type="text" name="user" onChange={handleInput} />
                <p>Write down your password</p>
                <input type="text" name="password" onChange={handleInput} />
                <Button variant="contained" onClick={handleSend}>Send</Button>
                <Button variant="contained">I forgot my password</Button>
            </div>
            {check && <p style={{color:"black"}} >You User already existe, please go to <Link to={"/login"}>Login</Link> </p>}
            {success && <p style={{color:"black"}} >Succesful registration!  </p>}

        </div>

    )
}

export default Register