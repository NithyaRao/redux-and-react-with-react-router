import React, { Component } from 'react'
import TodoList from './TodoList'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div className='App'>
       <h1> ToDo List <h1/>
        <TodoList todos={this.props.todos}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})
export default connect(mapStateToProps) (App)
