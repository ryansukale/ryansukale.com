/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
import ds from "../utils/designSystem"

const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Bookshelf", href: "bookshelf" },
]

export function renderMenuItem(data) {
  return (
    <li css={ds.p__sm}>
      <Link to={data.href} css={ds.td__n}>
        {data.label}
      </Link>
    </li>
  )
}

export default function DesktopHeader() {
  return (
    <nav>
      <ul css={[ds.list__n, ds.d__f]}>{nav.map(renderMenuItem)}</ul>
    </nav>
  )
}
