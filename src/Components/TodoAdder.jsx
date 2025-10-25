import React from 'react'

function TodoAdder() {
  return (
    <div className='AdderMain'>
        <input className='AddInput' type="text" placeholder='To-do Name' />
        <button className='AddBTN col-span-1'>Add To-do</button>
    </div>
  )
}

export default TodoAdder