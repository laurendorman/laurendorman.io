import React from 'react';
import PropTypes from 'prop-types';
import withPosts, { inCategory, sortByDate } from 'nextein/posts';
import Link from 'nextein/link';
import Wrapper from '../components/Wrapper';

import { formatDate } from '../utils/date';


const Writing = ({ posts }) => {
  const postsByDate = posts.filter(inCategory('writing')).sort(sortByDate);

  const data = {
    title: 'Writing',
    header: 'Occasional penning.',
    description: 'Occasional penning.',
  };

  return (
    <Wrapper data={data}>
      <section>
        {postsByDate.map(post => (
          <article key={`post-${post.data.name}`}>
            <h2 className="measure mb0 f4 f3-ns"><Link {...post}><a href={post.data.url} title={post.data.title} className="no-underline near-black">{post.data.title}</a></Link></h2>
            <time className="ttu mid-gray f6">{formatDate(post.data.date)}</time>
          </article>
      ))}
      </section>
    </Wrapper>
  );
};

Writing.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default withPosts(Writing);
