import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
const layout = ({ children }) => {
    return (
        <body className="font-ms text-gray-700">
            <Navbar />
            <main className=" px-12">
                {children}
            </main>
            <Footer />
        </body>
    )
}

export default layout
