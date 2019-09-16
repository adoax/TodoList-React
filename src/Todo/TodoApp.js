import React from 'react';
import TodoList from './TodoList';

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ladate = new Date();
    }
    render() {
        return (
            <div>
                <h1 className="text-center p-4"> Todo list</h1>
                <h3>A faire</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>REnseigner une tache a effectuer</label>
                        <input type="text" className="form-control" onChange={this.handleChange} value={this.state.text} />
                    </div>
                    <button className="btn btn-primary">
                        ajouter {this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: (this.ladate.getDate()
            +'/'+(this.ladate.getMonth()+1)
            +'/'+this.ladate.getFullYear()
            +'-' +this.ladate.getHours()
            +'h' + this.ladate.getMinutes())
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
    

}

export default TodoApp;