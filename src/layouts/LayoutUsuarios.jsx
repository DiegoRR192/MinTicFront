import React from 'react'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'

const LayoutUsuarios = ({children}) => {
    return (
        <div className='mainContainer'>
            <Sidebar/>
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default LayoutUsuarios
