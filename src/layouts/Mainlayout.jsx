import React from 'react'
import { Outlet } from 'react-router-dom'
import Cursor from '../component/Cursor'

const Mainlayout = () => {
  return (
    <div>
        <Cursor/>
        <Outlet/>
    </div>
  )
}

export default Mainlayout