import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = () => {
    return (
        <Layout>
            <div className="max-w-screen-lg mx-auto ">
                {/* Hero */}
                <div>
                    <h1 className="pt-12 xs:pt-24 pb-8">Blog</h1>
                </div>
            </div>
        </Layout >
    )
}

export default BlogPage
