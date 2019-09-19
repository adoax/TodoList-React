import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
 
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (

      <div>
        <h3 className="text-capitalize text-center ">todo list</h3>
        <div className="row justify-content-md-center">
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            ); 
          })
          }
        </div>
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </div>

    );
  }
}