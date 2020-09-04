import React from 'react'
import './index.css';

function Todo(props)
{
   const compStyle={
       font:"italic",
       color:"grey",
       fontFamily: "Sofia",
       fontSize: 26


   }
    return (
        <div className="todo">
            <input type="checkbox" checked={props.item.comp}
            onChange={()=>props.handleChange(props.item.id)}/>
           
    
            <p style={props.item.comp?compStyle:null}>{props.item.text}</p>

        </div>
    )
}
export default Todo