import React, { Component } from "react";

export default class TodoItem extends Component {

  render() {
    const { title, handleDelete, handleEdit,  handleValidate } = this.props;
    return (
      <li  className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6 onClick={handleValidate} className={this.state.hover ? "text-danger" : "text-primary"}>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}