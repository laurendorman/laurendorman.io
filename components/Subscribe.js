import React from 'react';

import { styles } from '../constants/styles';

const Subscribe = () => (
  <div className="br2 bg-near-white ph3 pv1 mt5 f6 f5-ns lh-copy">
    <p>For more thoughts <a href="https://buttondown.email/laurendorman" className={`${styles.link}`}>subscribe to my newsletter</a> and <a href="https://twitter.com/laurendorman" className={`${styles.link}`}>follow me on Twitter</a>.</p>
  </div>
);

export default Subscribe;
