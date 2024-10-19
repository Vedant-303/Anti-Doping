import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from './components/sidemenu/Menu'
import SearchBar from './components/sub_components/Searchbar'

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
