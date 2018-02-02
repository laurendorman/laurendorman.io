import React from 'react';

import { styles } from '../constants/styles';
import { getCurrentYear } from '../utils/date';

const Footer = () => (
  <footer className="mw8 center mv4 mh2 f6 f5-ns near-black fw7">
    <p>© {getCurrentYear()} · Packaged with care.</p>
    <ul className="list pl0 flex mv0">
      <li className="mr2"><a href="https://github.com/laurendorman" className={`${styles.navigationLink}`}>GitHub</a></li>
      <li className="mr2"><a href="https://twitter.com/laurendorman" className={`${styles.navigationLink}`}>Twitter</a></li>
      <li><a href="mailto:hello@laurendorman.io" className={`${styles.navigationLink}`}>Email</a></li>
    </ul>
  </footer>
);

export default Footer;
