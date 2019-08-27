/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import oz from "../../styles/emotion/atoms";

export function renderMenuItem({label, link}) {
  return (
    <li
      key={label}
      className="p--sm">
      <a
        className="td--n"
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
      <ul className="list--n d--f">
        {items.map(renderMenuItem)}
      </ul>
    </nav>
  )
}

DesktopHeader.propTypes = {
  items: PropTypes.array.isRequired
}