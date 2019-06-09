/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import Layout from "../components/Layout"
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

const styles = {
  tagline: css`
    font-family: sans;
  `
}

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

    <div className="row justify-content-center">
      <h1 css={styles.tagline}>Observe -> Infer -> Create -> Release</h1>
    </div>

    <div className="row justify-content-center">
      <div css={ds.mt__md}>
        Software engineer specializing in <a href="/" target="_blank">User Experience Design</a> and <a href="/" target="_blank">Front end web development</a>.
      </div>
    </div>

    <div
      className="row justify-content-center"
      css={[ds.mt__md]}>
      {renderSocialProfiles(socialProfiles)}
    </div>
  </Layout>
)

export default IndexPage
