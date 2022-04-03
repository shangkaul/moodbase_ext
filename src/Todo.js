import { useEffect, useState } from "react";
import "./App.css";

export default function Todo()
{
const [modal,setModal]=useState("none");
const [icon,setIcon]=useState("tick");
let list_obj= localStorage.getItem("mood_todo") == undefined ? [{"task":"","checked":false}] : JSON.parse(localStorage.getItem("mood_todo"));
const [todoList,setTodoList] = useState(list_obj);


const toggleModal = () =>{
    if(modal === "none")
    {
      setModal("unset");
      setIcon("close")
    }
    else
    {
      setModal("none");
      setIcon("tick");
    }
}

function handleCheck(e,i)
{
  let new_array = todoList;
  new_array[i].checked=!new_array[i].checked;
  setTodoList([...new_array]);
  localStorage.setItem("mood_todo",JSON.stringify(todoList));
}

function updateArr(e,i)
{
  let new_array = todoList;
  new_array[i].task=e.target.value;
  setTodoList([...new_array]);
  localStorage.setItem("mood_todo",JSON.stringify(todoList));
}

function addItem(){
  let new_arr = todoList;
  new_arr.push({"task":"","checked":false});
  setTodoList([...new_arr]);
  localStorage.setItem("mood_todo",JSON.stringify(todoList));
}

return(<div className="Todo">
    {
      icon === "tick" ? (<div className="todo-fab" onClick={toggleModal}><i className="fa fa-check" aria-hidden="true"></i></div>) : (<div style={{backgroundColor:"red"}} className="todo-fab" onClick={toggleModal}><i className="fa fa-close" aria-hidden="true"></i></div>)}

<div className="container modal" id="modal-container" style={{display:modal}}>
<div className="container-title">Hit List for Today.</div>
<div className="container-content">
      {todoList.map((item,key) => 
      <span key={key}> <input type="checkbox" checked={item.checked} onChange={e=>handleCheck(e,key)}/> <input name={item.task} defaultValue={item.task} onChange={e=>updateArr(e,key)}/></span>
      )}
      	

        <button className="btn btn-white" onClick={addItem}>ADD</button>
</div>
</div>
              
</div>)
}
