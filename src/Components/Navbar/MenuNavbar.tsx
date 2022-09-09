import React,{useState} from "react"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const MenuNavbar=()=>{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  


    return(
            <div> 
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                
            >
                    <MenuItem onClick={handleClose}><Link to="/trips/Orbit"><a>Orbit</a></Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/trips/Moon"><a>Moon</a></Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/trips/Mars"><a>Mars</a></Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/trips/Deep Space"><a>Deep Space</a></Link></MenuItem>
                </Menu>
            </div>
    )

}

export default MenuNavbar