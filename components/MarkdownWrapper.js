import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import reactRenderer from 'remark-react';

import { NextLink, H1, H2, List, Paragraph, Script } from '../utils/markdownRender';

import Wrapper from './Wrapper';

const remarkOpts = {
  sanitize: false,
  remarkReactComponents: {
    a: NextLink,
    h1: H1,
    h2: H2,
    ul: List,
    ol: props => <List {...props} ordered />,
    p: Paragraph,
    script: Script,
  },
};

const MarkdownWrapper = ({ className, data, children: content }) => (
  <Wrapper data={data} className={className}>
    {remark().use(reactRenderer, remarkOpts).processSync(content).contents}
  </Wrapper>
);

MarkdownWrapper.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  children: PropTypes.string,
};

export default MarkdownWrapper;
