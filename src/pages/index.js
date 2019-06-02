/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "@emotion/core"

import Layout from "../components/Layout"
import Image from "../components/image"
import SocialProfileIcon from "../components/SocialProfileIcon"
import SEO from "../components/seo"
import ds from "../utils/designSystem"

const socialProfiles = [
  {
    href: "https://twitter.com/ryansukale",
    label: "Twitter",
    logoSrc: "/social_icons/twitter_logo.svg",
    target: "blank",
  },
  {
    href: "https://github.com/ryansukale",
    label: "Github",
    logoSrc: "/social_icons/github_logo.svg",
    target: "blank",
  },
  {
    href: "https://www.linkedin.com/in/ryansukale",
    label: "Linkedin",
    logoSrc: "/social_icons/linkedin_logo.svg",
    target: "blank",
  },
]

export function renderSocialProfiles(profiles) {
  return (
    <ol css={ds.d__f}>
      {profiles.map(item => (
        <li key={item.label} css={ds.px__md}>
          <SocialProfileIcon {...item} />
        </li>
      ))}
    </ol>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["ryansukale", "profile", "portfolio"]} />
    <h1 className="tagline">I am just an ordinary man, chasing his dreams.</h1>I
    am a software engineer by profession specializing in User Experience Design
    and Front end web development. I often write about{" "}
    <a href="/">User Experience</a>, and <a href="/">Javascript</a> in my spare
    time.
    {renderSocialProfiles(socialProfiles)}
    <div css={ds.p__sm}>
      You can also read about my other work on
      <br />
      <ul>
        <li>Minimalism</li>
        <li>Health and Nutrition</li>
      </ul>
    </div>
    <div>Second life</div>I am a dancer/performer training myself in Latin
    dances like Bachata and Salsa, Brazilian zouk and modern hip hop and
    freestyle. You can watch some of my performances here. And some of my
    freestyle/choreography here. Aside from that I also indulge in some casual
    photography on my instagram.
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
