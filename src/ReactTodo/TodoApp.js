import React from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import uuid from 'uuid'

class TodoApp extends React.Component {

constructor (props) {
    super(props);
    this.state = {
        items: [],
        id: uuid(),
        item: "",
        editItem: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.clearList = this.clearList.bind(this);
};

handleChange (e) {
    this.setState({
        item: e.target.value
    });
};

handleSubmit (e) {
    e.preventDefault();

    const newItem = {
        id: this.state.id,
        title: this.state.item
    }
    const updateItems = [...this.state.items, newItem];

    this.setState({
        items: updateItems,
        item: "",
        id: uuid(),
        editItem: false
    });
};

clearList () {
    this.setState({
        items: []
    });
};

handleDelete (id) {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
        items: filteredItems
    });
};

handleEdit (id) {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id == id)

    this.setState({
        items: filteredItems,
        item: selectedItem.title,
        editItem: true,
        id: id
    });
};

render () {
    return (
        <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
}

}

export default TodoApp;