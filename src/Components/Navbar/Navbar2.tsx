
import React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import MenuNavbar from './MenuNavbar';
import "./styleNavbar2.css"
import { AddAlertRounded } from '@mui/icons-material';
import Login from '../Login/Login';
//import {useState} from "react"

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar2 = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
/*agregue menu dashbpard para desplegabl en nab*/
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement   >(null);//para open menu gde nab
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null)
  const[getContentAnchorEl,setGetContentAnchorEl]=React.useState<null>(null)
  const open = Boolean(anchorEl);//para open menu gde nab
  const open1 = Boolean(anchorEl1);//para open menu gde nab
  /*----------------------*/
  const[checkMenu,setCheckMenu]=useState("")
  /*---para navbar-----*/ 
  const[checkNavbar,setCheckNavbar]=useState(false)

  const linkTrips="trips"
  const linkExcursions="excursions"

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
//para open menu , dos funciones. 1 es para cuando se hace click en trips, en state se guarda trips, en jsx dice si es trips menu es con trips, con q aparezca una sola vez menu en jsx ya ok
//la otra funciona lo mismo pero para cdo se excursions
const handleClick= (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
 setCheckMenu("trips")
  
};

const handleClick2= (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
 setCheckMenu("excursions")
  
};
/*-------------------*/
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  useEffect(()=>{

    window.addEventListener("scroll",handleSticky)
    return()=>window.removeEventListener("scroll",handleSticky)
  },[])

  const handleSticky=()=>{
    if(window.scrollY>100){
      setCheckNavbar(true)
    }
    if(window.scrollY<100){
      setCheckNavbar(false)
    }

  }
  

  /*color*/
  const darkTheme = createTheme({
    palette: {
      
      primary: {
        main: '#00003F',
      },
    },
  });
// <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar /*position="static"*/ className={checkNavbar ?'navbarok' : "navbarNormal"} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <img src="logospace.png" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem key={1} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Button><Link to="/"><a>Home</a></Link></Button></Typography>
                </MenuItem>

                <MenuItem key={2} >
                  <Typography textAlign="center">
                    <Button aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}>
                      <a>Packages</a>  </Button> 
                    </Typography>
                </MenuItem>
                       {/*menu*/}

                <MenuItem key={3} >
                  <Typography textAlign="center">
                    <Button aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick2}>
                       <a>Excursions</a> </Button>
                    </Typography>
                </MenuItem>

                 {/*menu*/}    

                <MenuItem key={4} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Button><Link to="/experiences">Experiences</Link></Button></Typography>
                </MenuItem>

                <MenuItem key={5} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Button><Link to="/aboutus"><a>About Us</a></Link></Button></Typography>
                </MenuItem>

                <MenuItem key={6} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Button> <Link to="/contact"><a>Contact</a></Link></Button></Typography>
                </MenuItem>
            
            </Menu>
          </Box>
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
       
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button
                key={1}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                
              >
                <Link to="/"><a>Home</a></Link>
                
              </Button>

            
              <Button
                key={7}
                id="basic-button"
                sx={{ my: 2, color: 'white', display: 'block' }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Packages
              </Button>

                      
                     
                     {/*menu*/}
              <Button
                key={8}
                id="basic-button1"
                sx={{ my: 2, color: 'white', display: 'block' }}
                aria-controls={open ? 'basic-menu1' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick2}
                  
                
              >
              Excursions
              </Button>
              {checkMenu=="trips" ? (
                      <Menu
                          id="basic-button"
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
                      ): (
                        <Menu
                          id="basic-button"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleClose}><Link to="/excursions/Orbit"><a>Orbit</a></Link></MenuItem>
                          <MenuItem onClick={handleClose}><Link to="/excursions/Moon"><a>Moon</a></Link></MenuItem>
                          <MenuItem onClick={handleClose}><Link to="/excursions/Mars"><a>Mars</a></Link></MenuItem>
                          <MenuItem onClick={handleClose}><Link to="/excursions/Deep Space"><a>Deep Space</a></Link></MenuItem>
                        </Menu>
                      )}
                      
              <Button
                key={9}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/experiences"><a>Experiences</a></Link>
              </Button>

              <Button
                key={10}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/aboutus"><a>About</a></Link>
              </Button>

              <Button
                key={11}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/contact"><a>Contact</a></Link>
              </Button>
         
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
               
          </Box>
          <Link to={"/login"}><p style={{marginRight:25}}>Log In</p></Link>
          <Link to={"/register"}><p>Register</p></Link>
        </Toolbar>
     
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default Navbar2;
