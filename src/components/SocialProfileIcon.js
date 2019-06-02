/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import PropTypes from "prop-types"
import ds from "../utils/designSystem"

const styles = {
  icon: css`
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    text-align-center;
    margin: 0 auto;
  `,
}

export default function SocialProfileIcon(props) {
  const { label, logoSrc, ...linkProps } = props
  return (
    <a {...linkProps} css={ds.d__inb}>
      <div css={[styles.icon]} style={{ backgroundImage: `url(${logoSrc})` }} />
      <div css={ds.pt__x3sm}>{label}</div>
    </a>
  )
}
