/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ds from "../utils/designSystem"

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" keywords={["ryansukale", "profile", "portfolio"]} />

    <div className="row justify-content-center">
      Skills
    </div>

    <div className="row justify-content-center">
    </div>

    <div
      className="row justify-content-center"
      css={[ds.mt__md]}>
    </div>
  </Layout>
)

export default SkillsPage