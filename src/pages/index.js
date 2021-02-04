import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
// import SEO from "../components/seo"
const IndexPage = () => (
    <Layout>
        <div className="max-w-screen-lg mx-auto ">
            <h1 className="pt-24 pb-8">Hi, My name is Kamil.<br />I help companies make their products easier to use.</h1>
            <div className="flex items-center space-x-2">
                <p className="pl-1 ">You can meet me here:</p>
                <Link className="" to='https://www.linkedin.com/in/kamilrusiecki/'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 24 24"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1ZM8.8,17.629H6.125V9.569H8.8ZM7.464,8.468H7.447a1.4,1.4,0,1,1,.035-2.784,1.4,1.4,0,1,1-.018,2.784Zm11,9.161H15.785V13.317c0-1.084-.388-1.823-1.357-1.823a1.468,1.468,0,0,0-1.375.98,1.831,1.831,0,0,0-.088.654v4.5H10.286s.035-7.3,0-8.06h2.679V10.71a2.66,2.66,0,0,1,2.414-1.33c1.763,0,3.084,1.152,3.084,3.627Zm0,0" fill="#374151" /></svg>
                </Link>
                <Link className="" to="https://github.com/kamil-rusiecki">
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 24 24"><path d="M12.046,1.046A11.094,11.094,0,0,0,1.092,12.278a11.21,11.21,0,0,0,7.49,10.657c.547.106.748-.242.748-.54,0-.267-.009-.974-.014-1.91-3.046.677-3.689-1.507-3.689-1.507a2.964,2.964,0,0,0-1.219-1.643c-.992-.7.077-.682.077-.682A2.3,2.3,0,0,1,6.163,17.81a2.3,2.3,0,0,0,3.19.935,2.424,2.424,0,0,1,.694-1.5c-2.433-.281-4.99-1.246-4.99-5.55A4.395,4.395,0,0,1,6.185,8.678a4.083,4.083,0,0,1,.1-2.972s.918-.3,3.013,1.151a10.083,10.083,0,0,1,5.477,0c2.081-1.452,3-1.151,3-1.151a4.2,4.2,0,0,1,.109,2.972A4.415,4.415,0,0,1,19,11.692c0,4.315-2.561,5.265-5,5.541a2.728,2.728,0,0,1,.74,2.078c0,1.5-.014,2.711-.014,3.076,0,.294.191.646.753.533A11.172,11.172,0,0,0,23,12.278,11.1,11.1,0,0,0,12.046,1.046Zm0,0" fill="#374151" /></svg>
                </Link>
            </div>
        </div>
    </Layout >
)

export default IndexPage
