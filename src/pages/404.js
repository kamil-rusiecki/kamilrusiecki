import React from "react"
import Layout from "../components/layout"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        {/* <SEO title="404: Not found" /> */}
        <div className="max-w-screen-lg mx-auto">
            <h1 className="pt-12 xs:pt-24 pb-8">404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    </Layout>
)

export default NotFoundPage