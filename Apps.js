import React from 'react';
import Todo from './Todo'
import './index.css'
import tododata from './Tododata'
class Apps extends React.Component{
    constructor()
    {
        super()
        this.state={
            todos:tododata
        }
        this.handleChange = this.handleChange.bind(this)
    } 
    handleChange(id)
    {
        this.setState(prevState=>
            {
                const update = prevState.todos.map(todo=>
                    {
                        if(todo.id===id)
                        {
                            todo.comp=!todo.comp
                        }
                        return todo
                    })
                    return {todos : update }
            })
        
    }

  
   render()
   {
   const Todoitems=this.state.todos.map(item=><Todo key={item.id} item={item} handleChange={this.handleChange} />)
       return(
       <div className="todolist">
       
            {Todoitems}
      
       </div>
       )
       }
        
}
export default Apps