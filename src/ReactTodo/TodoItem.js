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
      <div className={this.state.hover ? 'col-12 d-flex flex-row-reverse' :  'col-12 d-flex flex-row' } id="false">
              <p onClick={this.handleValidate.bind(this)} className={this.state.hover ? "text-danger" : "text-primary"}>{title}</p>
              <div className="todo-icon">
                <span className="mx-2 text-success" onClick={handleEdit}>
                  <i className="fas fa-pen" />
                </span>
                <span className="mx-2 text-danger" onClick={handleDelete}>
                  <i className="fas fa-trash" />
                </span> 
              </div>
            </div>

    );
  }
}
