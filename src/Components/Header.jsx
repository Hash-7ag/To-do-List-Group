import React from 'react'
import { BiMenu } from "react-icons/bi";

function Header() {
  return (
    <div className='Header'>
        <button className='Menu'><BiMenu className='size-full' /></button>
    </div>
  )
}

export default Header