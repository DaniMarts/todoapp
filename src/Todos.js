import React from 'react';

function Todos(props){

    return(
        <div className="todos collections">
            {props.todos.map((item) => 
            <div 
                className="collection-item" 
                key={item.id} 
            >
                <span onClick={()=>props.removeItem(item.id)}>{item.content}</span>
                
            </div>
            
            
            )
            
            }
        </div>
    )
}

export default Todos;