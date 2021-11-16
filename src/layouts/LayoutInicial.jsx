import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'
import React from 'react'

const LayoutInicial = ({children}) => {
    return (
        <div className='mainContainer'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default LayoutInicial
