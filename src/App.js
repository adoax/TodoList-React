import React from 'react';
import './App.css';
import TodoApp from './Todo/TodoApp';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TodoApp />
      </div>      
    );
  }
}

export default App;
