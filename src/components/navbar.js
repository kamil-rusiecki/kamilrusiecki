import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <nav className="flex xs:flex-row justify-between px-6 py-7 sm:px-12 sm:py-10">
            <span className="font-semibold">
                <Link to="/">Kamil Rusiecki</Link>
            </span>
            <ul className="text-right flex flex-col space-y-6 xs:space-y-0 xs:flex-row xs:space-x-5 font-light">
                <li className=""><Link to="/casestudies/">Case studies</Link></li>
                <li className=""><Link to="/blog">Blog</Link></li>
                <li className=""><Link to="/about/">About me</Link></li>
            </ul>
        </nav >
    )
}

export default Navbar
