import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Action/index";
import "./Todo.css";
const Todo = () => {
  const [inputData, setInputData] = useState(' ');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="main-div">
        <div className="child-div">

          <figure>
            <figcaption>Add Your List Here!  - To Do List</figcaption>
          </figure>

          <div className="addItems">
            <input type="text" placeholder="Add Items ..." value={inputData} onChange={(event) => setInputData(event.target.value)} />
            <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(''))} ></i>
          </div>   {/*<!-- additems -->*/}

          <div className="showItems">
            {
              list.map((elem) => {
                return (
                  <div className="eachItems" key={elem.id}>
                    <h3>{elem.data}</h3>
                    <div className="todo-btn">
                    <i className="fa fa-trash-alt add-btn" title="Delete Items " onClick={() => dispatch(deleteTodo(elem.id))}></i>
                 </div>
                  </div>
                )

              })
            }

          </div>{/*<!-- showItems div-->*/}



<div className="showItems">
<button className="btn effect04" data-sm-link-text="Remove All" onClick={()=> dispatch(removeTodo())}><span>Check List</span></button>
</div>

        </div> {/*<!-- child div-->*/}
      </div>    {/*<!-- main div-->*/}
    </div>
  );
}
export default Todo;