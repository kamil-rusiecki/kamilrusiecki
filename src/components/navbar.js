import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <nav className="font-ms flex">
            <span className="flex-1">
                <Link to="/">Kamil Rusiecki</Link>
            </span>
            <ul className="flex-2 inline-flex">
                <li className="flex-1"><Link to="/casestudies/">Case studies</Link></li>
                <li className="flex-2"><Link to="/blog">Blog</Link></li>
                <li className="flex-3"><Link to="/about/">About me</Link></li>
            </ul>
        </nav >
    )
}

export default Navbar
