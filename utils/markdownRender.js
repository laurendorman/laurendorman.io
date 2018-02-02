import React from 'react';
import PropTypes from 'prop-types';

import Link from 'nextein/link';
import { styles } from '../constants/styles';

export function NextLink({ children, href, as }) {
  return <Link {...{ href, as }}><a href={href} className={`${styles.link}`}>{children}</a></Link>;
}

NextLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  as: PropTypes.string,
};

export function H1({ children }) {
  return <h1 className={`${styles.h1}`}>{children}</h1>;
}

H1.propTypes = {
  children: PropTypes.node,
};

export function H2({ children }) {
  return <h2 className={`${styles.h2}`}>{children}</h2>;
}

H2.propTypes = {
  children: PropTypes.node,
};

export function Paragraph({ children }) {
  return <p className={`${styles.paragraph}`}>{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.node,
};

export function Script({ src }) {
  return <script async src={`${src}`} />;
}

Script.propTypes = {
  src: PropTypes.string.isRequired,
};

export function List({ ordered, children }) {
  const ListType = ordered ? 'ol' : 'ul';
  return (
    <ListType className={ordered ? '' : `${styles.unorderedList}`}>
      {children}
    </ListType>
  );
}

List.propTypes = {
  ordered: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

List.defaultProps = {
  ordered: false,
};
