import React from 'react';
import Todos from './Todos';
import InsertItem from './InsertItem';

// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  state={
    todos: [
      {id:1, content: "Buy milk"},
      {id:2, content: "Buy eggs"},

    ]
  }

  addItem = (item) =>{
    item.id = this.state.todos.length+1;
    const todos = [...this.state.todos, item];
    this.setState({todos});
  }

  removeItem = (id) => {
    const todos = this.state.todos.filter((item) => item.id !== id);
    this.setState({todos});
  }
  render(){
    return (
      <div className="App">
        <h1 className="centre blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} removeItem={this.removeItem}/>
        <InsertItem addItem={this.addItem} />
      </div>
    );
  }
  
}

export default App;
