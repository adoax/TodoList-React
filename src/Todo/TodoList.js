import React from 'react'
import { isTemplateElement } from '@babel/types'

class TodoList extends React.Component {
    render() {
        return (
          <ul>
            {this.props.items.map(item => (
              <li key={item.id}>{item.text} {item.id}</li>
            ))}
          </ul>
        );
    }
}

export default TodoList;