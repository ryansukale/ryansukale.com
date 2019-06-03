import { css } from "@emotion/core"

// -- Start Theme --
export const colors = {
  primary: "lightblue",
}

export const spacing = {
  x3sm: ".35rem",
  x2sm: ".5rem",
  xsm: ".65rem",
  sm: ".875rem",
  md: "1rem",
  lg: "1.25rem",
}
// -- End Theme --

const textDecorationStyles = {
  td__lt: "text-decoration: line-through;",
  td__n: "text-decoration: none;",
  td__o: "text-decoration: overline;",
  td__u: "text-decoration: underline;",
}

const listStyles = {
  list__n: `list-style-type: none;`,
}

const displayStyles = {
  d__n: "display: none;",
  d__b: "display: block;",
  d__f: "display: flex;",
  d__if: "display: inline-flex;",
  d__i: "display: inline;",
  d__ib: "display: inline-block;",
  d__tb: "display: table;",
  d__tbr: "display: table-row;",
  d__tbc: "display: table-cell;",
  d__li: "display: list-item;",
  d__ri: "display: run-in;",
  d__cp: "display: compact;",
  d__itb: "display: inline-table;",
  d__tbcl: "display: table-column;",
  d__tbclg: "display: table-column-group;",
  d__tbhg: "display: table-header-group;",
  d__tbfg: "display: table-footer-group;",
  d__tbrg: "display: table-row-group;",
}

const marginStyles = {
  mt__md: `margin-top: ${spacing.md};`,
}

const paddingStyles = {
  // padding - all around
  p__xsm: `padding: ${spacing.xsm};`,
  p__sm: `padding: ${spacing.sm};`,
  p__md: `padding: ${spacing.md};`,
  p__lg: `padding: ${spacing.lg};`,

  // padding - horizontal
  px__xsm: `padding-left: ${spacing.xsm}; padding-right: ${spacing.xsm};`,
  px__sm: `padding-left: ${spacing.sm}; padding-right: ${spacing.sm};`,
  px__md: `padding-left: ${spacing.md}; padding-right: ${spacing.md};`,
  px__lg: `padding-left: ${spacing.lg}; padding-right: ${spacing.lg};`,

  // padding - top
  pt__x3sm: `padding-top: ${spacing.x3sm};`,
  pt__x2sm: `padding-top: ${spacing.x2sm};`,
  pt__xsm: `padding-top: ${spacing.xsm};`,
  pt__sm: `padding-top: ${spacing.sm};`,
  pt__md: `padding-top: ${spacing.md};`,
  pt__lg: `padding-top: ${spacing.lg};`,
}

export const utils = {
  stickyFooter: {
    // https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
    container: css`
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    `,
    children: css`
      flex: 1
    `
  }
}

// export default {
const atomic = {
  ...displayStyles,
  ...listStyles,
  ...textDecorationStyles,
  ...paddingStyles,
  ...marginStyles,
}

export default Object.keys(atomic).reduce((acc, style) => {
  acc[style] = css(atomic[style])
  return acc
}, {})
