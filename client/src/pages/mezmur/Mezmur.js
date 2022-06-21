import React, {useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Add_new_mezmur from './add_new_mezmur';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Display_Mezmur } from './display_mezmur';
import axios from 'axios';

const page = {page: '/mezmur'};

const Mezmur=({title, langetext})=>{
    const startingState = [{
        title: "",
        langetext: "",
      }];
      const [startState, setStartState] = useState(startingState);
    
    const [state, setState] = React.useState(page);
    const history = useNavigate();
    const loginHandler=()=>{
        history('/mezmur/addmezmur'); 
    };
    const editHandler=()=>{
        history('/mezmur/editmezmur');
    };
    const loginHandler4=()=>{
        history('/mezmur/deletemezmur'); 
    };
    const displayHandler3=()=>{
        history('/mezmur/displaymezmur');

    };
    const loginHandler2=goto=>{
        history(goto) ; 
    };
    const loginHandler3=goto=>{
        setState({goto});};
    const onBackClick = e => {
            //e.preventDefault()
            // navigate(-1);
            history(e)
          };
 
            const getData = async () => {
           // evt.preventDefault();
            //const newMezmur = { title, mezmur };
            try {
              const response = await axios.get('http://localhost:5000/mezmur');
                //method: "GET",
                //body: JSON.stringify(startState),
                //headers: {
                  //"Content-Type": "application/json",
                  await setStartState( [...startState, response] );
                } catch (error){
                    console.log(error);
                }
              };
              useEffect(()=>{
                  getData();
              }, []);
             
          console.log(startState);
    
    console.log(loginHandler2);
    return (
    <div className="sunday">
        <h1>Mezmur</h1> 
            <Stack spacing={2} direction="row" justifyContent={'center'}>
                <Button variant="outlined" onClick={loginHandler}>Add new Mezmur</Button>
                <Button variant="outlined" onClick={editHandler}>Edit Mezmur</Button>
                <Button variant="outlined" onClick={loginHandler4}>Delete Mezmur</Button>
                <Button variant="outlined"> <NavLink to='/mezmur/displaymezmur'> Display Mezmur</NavLink></Button>
                <Button variant="outlined"> <NavLink to='/mezmur/searchmezmur'>search Mezmur</NavLink> </Button>
                <Button variant="outlined"> <NavLink to='/mezmur/help'> HELP ?</NavLink></Button>
            </Stack>
  
            <h3>Title of the mezmur</h3>
    {//title.map((item, index) => <Add_new_mezmur key={index} title={item} />)}
}
            <p>mezmur text</p>
            {console.log(startState)}
        <div> {startState.map((mez)=>(
            <ul style={{color: "yellow", backgroundColor: "green"}} key={mez._id}>
                <li style={{color: "red"}}>{mez.title}</li>
                <li>{mez.langetext}</li>
            </ul>))}
        </div>
    </div>
    )
};
export default Mezmur;