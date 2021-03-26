import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
const layout = ({ children }) => {
    return (
        <div className="font-ms text-gray-700 flex flex-col h-screen justify-between" >
            <Navbar />
            <main className="px-6 sm:px-12 mb-auto">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout
