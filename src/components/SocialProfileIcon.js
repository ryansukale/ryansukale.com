/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import ds from "../utils/designSystem";

const styles = {
  socialProfileIcon: css`
    width: 40px;
    height: 40px;
    background-repeat: none;
  `
};

export default function SocialProfileIcon({ label, href, logoSrc }) {
  return (
    <a href={href} css={ds.d__inb}>
      <div
        css={styles.socialProfileIcon}
        style={{backgroundImage: `url(${logoSrc})`}}
      />
      <div css={ds.pt__x3sm}>{label}</div>
    </a>
  );
}