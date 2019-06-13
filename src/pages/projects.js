/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ds from "../utils/designSystem"

import corporate from "../data/projects/corporate"

function Project(props) {
  return (
    <div>
      {props.product_name}
    </div>
  )
}

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={["ryansukale", "profile", "portfolio"]} />

    <div className="row justify-content-center">
      <ul>
        {
          corporate[0].projects.map(
            p => 
            <li key={p.product_name + p.project_name}>
              <Project {...p} />
            </li>
          )
        }
      </ul>
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