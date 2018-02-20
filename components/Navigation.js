import React from 'react';
import Link from 'next/link';

import { styles } from '../constants/styles';

const Navigation = () => (
  <nav className="mw8 center flex items-center mb5">
    <Link href="/">
      <a href="/" className="white flex-grow-1 no-underline">
        <svg width="40px" height="40px" viewBox="0 0 500 500">
          <title>Lauren Dorman</title>
          <defs>
            <linearGradient x1="0%" y1="42.4558081%" x2="100%" y2="42.4558073%" id="linearGradient">
              <stop stopColor="#5B3C70" offset="0%" />
              <stop stopColor="#E57B5D" offset="100%" />
            </linearGradient>
          </defs>
          <polygon id="Fill-1" fill="url(#linearGradient)" points="0 499.321464 499.321464 499.321464 499.321464 0 0 0" />
          <path d="M212.729493,109 L212.729493,280.837195 L287.66554,280.837195 L287.66554,179.510243 L300.942952,179.510243 C322.466733,179.510243 332.541426,199.659629 332.541426,261.923503 C332.541426,287.973961 329.578281,319.458953 300.942952,319.458953 L169.038865,319.458953 L169.038865,109 L88,109 L88,389.969197 L301.39688,389.969197 C385.184535,389.969197 411.890668,312.397842 411.890668,261.923503 C411.890668,176.307525 384.264069,109 300.942952,109 L212.729493,109 Z" fill="#FFFFFF" />
        </svg>
      </a>
    </Link>
    <ul className="list pl0 flex mv0">
      <li className="mr2 mr4-ns"><Link href="/writing"><a href="/writing" className={`${styles.navigationLink}`}>Writing</a></Link></li>
      <li className="mr2 mr4-ns"><Link href="/projects"><a href="/projects" className={`${styles.navigationLink}`}>Projects</a></Link></li>
      <li><Link href="/about"><a href="/about" className={`${styles.navigationLink}`}>About</a></Link></li>
    </ul>
  </nav>
);

export default Navigation;
