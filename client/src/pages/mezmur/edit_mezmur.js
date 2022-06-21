const Edit_Mezmur = () => {
    return (
        <div className="sunday">
            <h2>Edit Mezmur</h2>
          <form className="sunday" /*onSubmit={handleSubmit}*/ >
            <label className="input-item">
              <input type="text" name="todo" /*onChange={handleChange} value={todoText} *//>
            </label>
            <input className="btn" type="submit" value="EDIT" />
          </form>
          <div className="todos">
            <h3>Edit mezmur</h3>
            {/* Take the items array, and map Todo items based on it, passing the individual item data down to the component */}
            {/*todoTasks.map((item, index) => <TodoItem key={index} data={item} />)*/}
          </div>
        </div>
      )
    };
    
    export default Edit_Mezmur;
