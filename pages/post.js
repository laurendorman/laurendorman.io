import React from 'react';
import PropTypes from 'prop-types';
import withPost, { Content } from 'nextein/post';

import { NextLink, H1, H2, Paragraph, Script, List } from '../utils/markdownRender';

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
          ul: List,
          ol: props => <List {...props} ordered />,
          p: Paragraph,
          script: Script,
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
