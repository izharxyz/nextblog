import React from 'react'

import { Header, Footer } from './'

type props = {
    children?: any
}
const Layout = ({ children }: props) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout