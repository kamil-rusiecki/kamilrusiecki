import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <nav className="flex justify-between px-12 py-10">
            <span className="font-semibold">
                <Link to="/">Kamil Rusiecki</Link>
            </span>
            <ul className="flex space-x-3 font-light">
                <li className=""><Link to="/casestudies/">Case studies</Link></li>
                <li className=""><Link to="/blog">Blog</Link></li>
                <li className=""><Link to="/about/">About me</Link></li>
            </ul>
        </nav >
    )
}

export default Navbar
