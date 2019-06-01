/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from '@emotion/core'

import Layout from "../components/Layout"
import Image from "../components/image"
import SocialProfiles from "../components/SocialProfiles"
import SEO from "../components/seo"
import ds from "../utils/designSystem";

const socialProfiles = [
  { href: "/", label: 'Twitter', logoSrc: "/TODO" }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ryansukale`, `profile`, `portfolio`]} />
    <h1 className="tagline">I am just an ordinary man, chasing his dreams.</h1>

    I am a software engineer by profession specializing in User Experience Design and Front end web development. I often write about <a href="/">User Experience</a>, and <a href="/">Javascript</a> in my spare time.

    <div class="container">
      <SocialProfiles items={socialProfiles} />
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>

    <div css={ds.p__sm}>
      You can also read about my other work on
      <br/>
      <ul>
        <li>Minimalism</li>
        <li>Health and Nutrition</li>
      </ul>
    </div>

    <div>Second life</div>
    I am a dancer/performer training myself in Latin dances like Bachata and Salsa, Brazilian zouk and modern hip hop and freestyle.

    You can watch some of my performances here. And some of my freestyle/choreography here. Aside from that I also indulge in some casual photography on my instagram.

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
