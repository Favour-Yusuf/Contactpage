import React from 'react'
import { Footer, Header } from '..'
import { Outlet } from 'react-router'

const HomeLayout: React.FC = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout