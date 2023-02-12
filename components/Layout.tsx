import React from 'react'

import { Header, Footer } from './'

type props = {
    children?: any
}
const Layout = ({ children }: props) => {
  return (
    <>
        <div className='container mx-auto px-2 md:px-10 my-8 rounded-full sticky'>
          <Header/>
        </div>
        {children}
        <Footer/>
    </>
  )
}

export default Layout