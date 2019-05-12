import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>I am just an ordinary man, chasing his dreams.</h1>

    I am a software engineer by profession specializing in User Experience Design and Front end web development, primarily using tecnologies like React.

    I often write about <a>User Experience</a>, and <a>Javascript</a>.

    You can also read about my other work on

    <ul>
      <li>Minimalism</li>
      <li>Health and Nutrition</li>
    </ul>

    <div> Second life </div>

    I am a dancer/performer training myself in Latin dances like Bachata and Salsa, Brazilian zouk and modern hip hop and freestyle.

    You can watch some of my performances here. And some of my choreography here. Aside from that I also indulge in some lightweight photography on my instagram feed.

    Javascript
    
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
