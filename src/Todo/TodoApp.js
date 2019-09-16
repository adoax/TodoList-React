import React from 'react';
import TodoList from './TodoList';

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
    }
    onChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    AddTodo (e) {
        e.preventDefault();
        this.setState({
            text: '',
            done: false,
            items: [...this.state.items, this.state.text]
        });
    }

    RemoveTodo (item) {
        const array =   this.state.items
        const index = array.indexOf(item);
        array.splice(index, 1)
        this.setState({ items: array })
    }


    renderTodo (e) {
        return this.state.items.map((item) => {
            return (
                    <li key={item} className={this.todoClass}>{item} <button className="badge badge-danger" onClick={this.RemoveTodo.bind(this, item)}> X</button>
                    </li>
            )
       });
    }

    render() {
        return (
            <div>
                <h1 className="text-center p-4"> Todo list</h1>
                <h3>A faire</h3>
                <ul> 
                    {this.renderTodo()}
                </ul>
                <form >
                    <div className="form-group">
                        <label>REnseigner une tache a effectuer</label>
                        <input type="text" className="form-control" onChange={this.onChange.bind(this)}  value={this.state.text}/>
                    </div>
                    <button onClick={this.AddTodo.bind(this)} className="btn btn-primary">Envoyer</button>
                </form>
            </div>
        );
    }


}

export default TodoApp;