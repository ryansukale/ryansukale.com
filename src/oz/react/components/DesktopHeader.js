/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import oz from "../../styles/emotion/atoms";

export function renderMenuItem({label, link}) {
  return (
    <li css={oz.p__sm}>
      <a
        css={oz.td__n}
        {...link}
      >
        {label}
      </a>
    </li>
  )
}

export default function DesktopHeader({items}) {
  return (
    <nav>
      <ul css={[oz.list__n, oz.d__f]}>
        {items.map(renderMenuItem)}
      </ul>
    </nav>
  )
}

DesktopHeader.propTypes = {
  items: PropTypes.array.isRequired
}