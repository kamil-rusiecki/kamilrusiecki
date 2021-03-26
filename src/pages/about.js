import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const AboutPage = ({ data }) => {
    return (
        <Layout>
            <div className="max-w-screen-lg mx-auto ">
                {/* Hero */}
                <section>
                    <h1 className="pt-12 xs:pt-24 pb-8">About me</h1>
                    <Img fixed={data.file.childImageSharp.fixed} />
                    <article className="leading-loose">For over 12 years I have been dealing with usability design for digital products. In 2017, I joined Dynatrace, where until today, with a great team we achieve new business goals, providing users with the comfort of their work. I live in Gdańsk, Poland. You can meet me on a walk or on a bicycle trip with my family. I am a huge advocate of the open source movement, so on my GitHub you will find a lot of stuff that I release under an open source license. Apart from usability design, my interests include data visualization and music creation. This is also reflected in my repositories.
                    </article>
                </section>
            </div>
        </Layout >
    )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "kamil.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
