import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import './AppLayout.css'
const AppLayout: React.FC = () => {
  return (
    <div className='layout-container'
    >
      <Sidebar />
      <Navbar />
    </div>
  )
}


export default AppLayout