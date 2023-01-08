import React from 'react'
import { Typography } from '@mui/material'
import Navbar from '../partials/Header/Header'
import Footer from '../partials/Footer/Footer'

function Layout({ children }) {
  return (
    <>
      <Typography component='div'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Typography>
    </>
  )
}

export default Layout
