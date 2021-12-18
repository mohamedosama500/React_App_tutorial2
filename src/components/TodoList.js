import React, { Component } from 'react';
import '../styles/todo.css';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    const id =this.props.todo;
    return (
      <section className='todo-section-container'>
        <header>
          <button className='btn completed-btn'  
          onClick={() => this.props.CompletedTodo(id)}
          >
            
            completed_todo_only✅
          
          </button>
        </header>
        <ul className='flex-column'>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={this.props.toggleTodo}
              handleDeleteTodo={this.props.handleDeleteTodo}
              CompletedTodo={this.props.CompletedTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}
