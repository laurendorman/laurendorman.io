import React from 'react';
import PropTypes from 'prop-types';
import withPost, { Content } from 'nextein/post';
import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';

import { NextLink, H1, H2, H3, Paragraph, Script, List, LI } from '../utils/markdownRender';

import Wrapper from '../components/Wrapper';
import Subscribe from '../components/Subscribe';

const Post = ({ post }) => {
  const isProject = post.data.category === 'projects';
  const postData = {
    title: post.data.title,
    header: post.data.title,
    description: post.data.description,
    date: isProject ? '' : post.data.date,
  };

  return (
    <Wrapper data={postData} className="measure-wide">
      <section>
        <Content
          {...post}
          renderers={{
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
        }}
        />
      </section>
      {isProject ? null : <Subscribe />}
    </Wrapper>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default withPost(Post);
