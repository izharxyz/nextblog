import React from 'react'

import { Header } from './'

type props = {
    children?: any
}
const Layout = ({ children }: props) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}

export default Layout