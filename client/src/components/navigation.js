import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { display } from '@mui/system';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Tabs, Tab, Button, ListItemIcon, useMediaQuery, useTheme } from '@mui/material';

import { red } from '@mui/material/colors';
import { Link, NavLink } from 'react-router-dom';
const pagesArr=["Program", "Mezmur", "Finanz", "Predict", "Jugend", "Kinder", "Help?"];
const pagesArrD=["Program", "Mezmur", "Finanz", "Predict", "Jugend", "Kinder", "Help?", "Login", "Signup"];
const pagesArrLink=["/rogram", "/Mezmur", "/Finanz", "/Predict", "/Jugend", "/Kinder", "/Help?"];
const pagesArrDLink=["/Program", "/Mezmur", "/Finanz", "/Predict", "/Jugend", "/Kinder", "/Help?", "/Login", "/Signup"];


export default function MenuAppBar() {
  const theme = useTheme();
console.log(theme);
const isMatch = useMediaQuery(theme.breakpoints.down('md'));
console.log(isMatch);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen]=React.useState(false);
  const [value, setValue] = React.useState();
  const arrOptions=["Add new Mezmur", "Edit Mezmur", "Delete Mezmure", "Display Mezmur", "Search Mezmur", "Help?"];
  const datOptions=["/mezmur/addmezmur", '/mezmur/editmezmur', '/mezmur/deletemezmur', '/mezmur/displaymezmur', '/mezmur/searchmezmur', '/mezmur/help'];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <button onClick={()=>setOpen(true)}><MenuIcon /></button>
            <Drawer open={open} onClose={()=>setOpen(false)}>
              <List sx={{bgcolor: '#1976d2', color: 'white', marginTop: '38PX', fontWeight: 'medium', variant: 'body2', fontSize: 25}}>
                {pagesArrD.map((page, index)=>(
                <ListItemButton key={index} onClick={()=>setOpen(false)} component={Link} to={`/${page}`}>
                  
                  <ListItemText primary={page} />
                
                </ListItemButton>))}
              </List> 
              
            </Drawer>
             </IconButton>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
            Home page
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
       
      </AppBar>
      <AppBar sx={{ marginTop: "100px", background: "#282c34"  }}>
        <Toolbar>
        {
            isMatch ? (
<>
              <Typography>Eritreische Gemiende des Ganzes Evangelium Cologne</Typography>
              </>):(<>
          <Tabs textColor="#61dafb" value={value} onChange={(e, value)=>setValue(value)} indicatorColor="secondary" >
            {
              pagesArr.map((page, index)=>(
              <Tab key={index} label={page} component={Link} to={`/${page}`} />
              ))
            }
              </Tabs> 
          <Button sx={{ marginLeft: "auto" }} variant="contained">Login</Button>
          <Button sx={{ marginLeft: "10px" }} variant="contained">Signup</Button>
          </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  ); 
}
 