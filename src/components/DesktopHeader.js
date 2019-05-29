/** @jsx jsx */
import { jsx } from '@emotion/core'
// import { Link } from "gatsby"
// import PropTypes from "prop-types"

// import SiteNav, {ContentGroup} from 'react-site-nav'
import ds from "../utils/designSystem";

const nav = [
  { label: 'Home' },
  { label: 'Projects' },
  { label: 'Skills' },
  { label: 'Experience' },
  { label: 'Bookshelf' },
];

export default function DesktopHeader() {
  const menuItems = nav.map(navItem => <li css={ds.p__sm}>{navItem.label}</li>);

  return (
    <nav>
      <ul css={[ds.list__n, ds.d__f]}>
        {menuItems}
      </ul>
    </nav>
  );
}