import React from 'react'
import Search from './Search'
import TodoAdder from './TodoAdder'
import TodoList from './TodoList'

function Container() {
  return (
    <div className='Container'>
        <TodoAdder/>
        <Search/>
        <TodoList/>
    </div>
  )
}

export default Container