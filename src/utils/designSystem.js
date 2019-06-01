import { css } from '@emotion/core';

// -- Start Theme --
export const colors = {
  primary: 'lightblue'
};

export const spacing = {
  x3small: '.35rem',
  x2small: '.5rem',
  xsmall: '.65rem',
  small: '.875rem',
  medium: '1rem',
  large: '1.25rem',
};
// -- End Theme --

const textDecorationStyles = {
  td__lt: 'text-decoration: line-through;',
  td__n: 'text-decoration: none;',
  td__o: 'text-decoration: overline;',
  td__u: 'text-decoration: underline;',
};

const listStyles = {
  list__n : `list-style-type: none;`,
};

const displayStyles = {
  d__n : 'display: none;',
  d__b : 'display: block;',
  d__f : 'display: flex;',
  d__if : 'display: inline-flex;',
  d__i : 'display: inline;',
  d__ib : 'display: inline-block;',
  d__tb : 'display: table;',
  d__tbr : 'display: table-row;',
  d__tbc : 'display: table-cell;',
  d__li : 'display: list-item;',
  d__ri : 'display: run-in;',
  d__cp : 'display: compact;',
  d__itb : 'display: inline-table;',
  d__tbcl : 'display: table-column;',
  d__tbclg : 'display: table-column-group;',
  d__tbhg : 'display: table-header-group;',
  d__tbfg : 'display: table-footer-group;',
  d__tbrg : 'display: table-row-group;',
};

const paddingStyles = {
  // padding - all around
  p__xsm : `padding: ${spacing.xsmall};`,
  p__sm : `padding: ${spacing.small};`,
  p__md : `padding: ${spacing.medium};`,
  p__lg : `padding: ${spacing.large};`,

  // padding - horizontal
  px__xsm : `padding-left: ${spacing.xsmall}; padding-right: ${spacing.xsmall};`,
  px__sm : `padding-left: ${spacing.small}; padding-right: ${spacing.small};`,
  px__md : `padding-left: ${spacing.medium}; padding-right: ${spacing.medium};`,
  px__lg : `padding-left: ${spacing.large}; padding-right: ${spacing.large};`,

  pt__x3sm : `padding-top: ${spacing.x3small};`,
  pt__x2sm : `padding-top: ${spacing.x2small};`,
  pt__xsm : `padding-top: ${spacing.xsmall};`,
  pt__sm : `padding-top: ${spacing.small};`,
  pt__md : `padding-top: ${spacing.medium};`,
  pt__lg : `padding-top: ${spacing.large};`,
};

// export default {
const atomic = {
  ...displayStyles,
  ...listStyles,
  ...textDecorationStyles,
  ...paddingStyles,
};

export default Object.keys(atomic).reduce((acc, style) => {
  acc[style] = css(atomic[style]);
  return acc;
}, {});