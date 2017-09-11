import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render () {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return <li key={todo.id}>todo.text</li>
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
