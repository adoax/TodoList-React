import React, { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
      this.state = {
        hover: false
      }
  };
  handleValidate() {
    this.setState(prevState => ({
      hover: !prevState.hover
    }));
  };

  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6 onClick={this.handleValidate.bind(this)} className={this.state.hover ? "text-danger" : "text-primary"}>{title}</h6>
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