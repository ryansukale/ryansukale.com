/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ds from "../utils/designSystem"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={["ryansukale", "profile", "portfolio"]} />

    <div className="row justify-content-center">
      Projects
    </div>

    <div className="row justify-content-center">
    </div>

    <div
      className="row justify-content-center"
      css={[ds.mt__md]}>
    </div>
  </Layout>
)

export default ProjectsPage