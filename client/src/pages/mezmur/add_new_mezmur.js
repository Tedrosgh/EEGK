//import { useState, useContext } from 'react';

import { useState } from "react";

//import TodoItem from '../TodoItem/TodoItem';

//import todoContext from '../../store/context';
//import { ADD_TODO } from '../../store/actions';

// Add a submit listener that...
// Add the new todo text to our App State

const Add_new_mezmur = () => {

  // Get the values we need from the Context with useContext()
  //const { todoTasks, dispatch } = useContext(todoContext);

  // Control the input to always have the input value in state (onChange, value)

  const startingState = {
    title: "",
    langetext: "",
  };
  const [startState, setStartState] = useState(startingState);
  const [isSubmitted, setisSubmitted] = useState(false);
  const [title, setTitle]  = useState('');
  const [ mezmur, setMezmur ] = useState('');

  const handleChange = evt => {
    const {name, value} = evt.target;
    setStartState({ ...startingState, [name]: value })
    //setTitle(evt.target.value)
  }
  const handleMezmur = evt => setMezmur(evt.target.value);

  const handleSubmit = async evt => {
    evt.preventDefault();
    //const newMezmur = { title, mezmur };
    try {
      const response = await fetch('http://localhost:5000', {
        method: "POST",
        body: JSON.stringify(startState),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataset = await response.json();
      if (dataset.ok) setisSubmitted(true);
      setTimeout(() => {
        setisSubmitted(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
    
    //setNewTodoText('');
  };


  return (
    <div className="sunday">
      <h2>Add new mezmur</h2>
      <form className="sunday" onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}} >
        <label className="input-item" placeholder="add title">
          <input type="text" name="title" id="title" value={title} onChange={handleChange} value={startState.title}/>
        </label>
        <label for="langetext">Add text mezmur here</label>

        <textarea id="langetext" name="langetext" rows="50" cols="30" placeholder="Add Mezmur here" value={mezmur} onChange={handleMezmur}>
                </textarea>  <br></br>      
          <button className="btn" type="submit">submit</button>
      </form>
      <div className="todos">
        
        {/* Take the items array, and map Todo items based on it, passing the individual item data down to the component */}
        {/*todoTasks.map((item, index) => <TodoItem key={index} data={item} />)*/}
      </div>
    </div>
  )
};

export default Add_new_mezmur;