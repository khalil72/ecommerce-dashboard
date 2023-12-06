import React from 'react'
import Header from './Header/Header'
import Sidenav from './Sidenav/Sidenav'

const Layout = ({children}) => {
    
  return (
    <div className='container-fluid m-0 p-0 overflow-x-hidden'>
     
     <div className='row'>
       <div className='col-md-12 p-2 pb-3 bg-dark text-white'>
       <Header />
       </div>
       <div className='col-md-2'>
         <Sidenav  />
       </div>
        <div className='col-md-10'>
        {children}
        </div>
     </div>
     </div>
    
  )
}

export default Layout