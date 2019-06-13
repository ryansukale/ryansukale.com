/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ds from "../utils/designSystem"

const RoleModelsPage = () => (
  <Layout>
    <SEO title="RoleModels" keywords={["ryansukale", "profile", "portfolio"]} />

    <div className="row justify-content-center">
      RoleModels
    </div>

    <div className="row justify-content-center">
    </div>

    <div
      className="row justify-content-center"
      css={[ds.mt__md]}>
    </div>
  </Layout>
)

export default RoleModelsPage