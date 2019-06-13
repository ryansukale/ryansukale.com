/** @jsx jsx */
import { jsx } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ds from "../utils/designSystem"

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" keywords={["ryansukale", "profile", "portfolio"]} />

    <div className="row justify-content-center">
      Experience
    </div>

    <div className="row justify-content-center">
    </div>

    <div
      className="row justify-content-center"
      css={[ds.mt__md]}>
    </div>
  </Layout>
)

export default ExperiencePage