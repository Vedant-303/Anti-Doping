import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from './components/sidemenu/Menu'

function Layout() {
  return (
    <>
    <SideMenu/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default Layout
