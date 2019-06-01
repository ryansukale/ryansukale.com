/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from "prop-types";
import ds from "../utils/designSystem";

export function SocialProfile({ label, href, logoSrc }) {
  return (
    <a href={href} class={ds.d__inb}>
      <img src={logoSrc}></img>
      <div>{label}</div>
    </a>
  );
}

export default function SocialProfiles({items}) {
  return (
    <ol class={ds.d__f}>
      {items.map( item => <li><SocialProfile {...item} /></li>)}
    </ol>
  );
}