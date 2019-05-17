import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"

import SiteNav, {ContentGroup} from 'react-site-nav'

export default function DesktopHeader() {
  return (
    <SiteNav
      align="center" /* center, left, right. This directly maps to justify-content of the root grid. */
      columnWidth="150"
      rowHeight="45"
      background="#323232"
      color="#fff"
      fontSize="18"
      fontFamily="Helvetica, sans-serif"
      contentBackground="#fff" /* Applies to all content groups */
      contentColor="#323232" /* Applies to all content groups */
      contentTop="0" /* Adjusts the distance between ContentGroups and root items */
      breakpoint="768" /* Show site nav at this breakpoint */
      debug={false} /* Keep ContentGroups open to make debugging easier */
    >
      <ContentGroup title="Bookshelf" rootUrl="https://github.com/yusinto" />
      <ContentGroup title="Skills" rootUrl="https://github.com/yusinto" />
    </SiteNav>
  );
}