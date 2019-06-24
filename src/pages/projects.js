/** @jsx jsx */
import { jsx } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ds from "../oz/styles/emotion/atoms"

import corporate from "../data/projects/corporate"

function Project(props) {
  return (
    <div>
      {props.product_name}
    </div>
  )
}

function Company({company_name, projects}) {
  return (
    <div
      key={company_name}
      css={ds.mt__sm}>
      <div
        css={[ds.fw_b, ds.fz_3lg]}>
        {company_name}
      </div>
      <ul>
        {
          projects.map(
            p =>
              <li
                key={p.product_name + p.project_name}>
                <Project {...p} />
              </li>
          )
        }
      </ul>
    </div>
  );
}

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={["ryansukale", "profile", "portfolio"]} />

    {corporate.map(data => <Company key={data.company_name} {...data} /> )}

    <div className="row justify-content-center">
    </div>

    <div
      className="row justify-content-center"
      css={[ds.mt__md]}>
    </div>
  </Layout>
)

export default ProjectsPage