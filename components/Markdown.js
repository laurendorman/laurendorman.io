import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import reactRenderer from 'remark-react';
import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';

import { NextLink, H1, H2, H3, List, LI, Paragraph, Script } from '../utils/markdownRender';

import Wrapper from './Wrapper';

const remarkOpts = {
  sanitize: false,
  remarkReactComponents: {
    a: NextLink,
    h1: H1,
    h2: H2,
    h3: H3,
    ul: List,
    ol: props => <List {...props} ordered />,
    li: LI,
    p: Paragraph,
    script: Script,
    code: RemarkLowlight({
      js,
      scss,
      xml,
    }),
  },
};

const Markdown = ({ className, data, children: content }) => (
  <Wrapper data={data} className={className}>
    {remark().use(reactRenderer, remarkOpts).processSync(content).contents}
  </Wrapper>
);

Markdown.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  children: PropTypes.string,
};

export default Markdown;
