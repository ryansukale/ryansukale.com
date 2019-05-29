import { css } from '@emotion/core';

// -- Start Theme --
export const colors = {
  primary: 'lightblue'
};

export const spacing = {
  xsmall: '.65rem',
  small: '.875rem',
  medium: '1rem',
  large: '1.25rem',
};
// -- End Theme --

// export default {
const atomic = {
  // padding - all around
  p__xsm : `padding: ${spacing.xsmall};`,
  p__sm : `padding: ${spacing.small};`,
  p__md : `padding: ${spacing.medium};`,
  p__lg : `padding: ${spacing.large};`,

  // padding - horizontal
  px__xsm : `padding-left: ${spacing.xsmall}; padding-right: ${spacing.xsmall};`,
  px__sm : `padding-left: ${spacing.small}; padding-right: ${spacing.small};`,
  px__md : `padding-left: ${spacing.medium}; padding-right: ${spacing.medium};`,
  px__lg : `padding-left: ${spacing.large}; padding-right: ${spacing.large};`
};

export default Object.keys(atomic).reduce((acc, style) => {
  acc[style] = css(atomic[style]);
  return acc;
}, {});