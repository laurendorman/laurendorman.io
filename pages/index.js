import React from 'react';
import PropTypes from 'prop-types';
import withPosts, { inCategory, sortByDate } from 'nextein/posts';
import Link from 'nextein/link';

import { styles } from '../constants/styles';
import Wrapper from '../components/Wrapper';

const Index = ({ posts }) => {
  const postsByDate = posts.filter(inCategory('writing')).sort(sortByDate).slice(0, 3);

  const data = {
    header: 'Thoughtful human being, making the web a better place.',
  };

  return (
    <Wrapper data={data} className="measure-wide">
      <section>
        <p className={`${styles.paragraph}`}>I&apos;m <span className="fw7">Lauren Dorman</span>, a Berlin-based design-oriented Product Engineer. I spend my days at <a href="http://acolorbright.com" title="A Color Bright" className={`${styles.link}`}>A Color Bright</a> building products and design systems.</p>

        <p className={`${styles.paragraph}`}>I enjoy making things that are modular, reuseable, and equipped with subtle animations and exciting color palettes <span role="img" aria-label="Artist Palette">🎨</span>. I strive to make the web both beautiful and accessible. I am most happy when solving problems and facing new challenges.</p>

        <p className={`${styles.paragraph}`}>I am a social activist, community builder, and connector. I value human connection and creating safe spaces for all.</p>

        <p className={`${styles.paragraph}`}>When my eyes aren&apos;t glued to a screen, I enjoy cycling <span role="img" aria-label="Cyclist">🚴🏽‍</span>, attending shows <span role="img" aria-label="Musical Note">🎵</span>, and creating magic <span role="img" aria-label="Sparkles">✨</span> with my <a href="https://twitter.com/LaurenDorman/status/697590183559036928" alt="Ableton Push 2" title="Ableton Push 2" className={`${styles.link}`}>Push 2</a>.</p>
      </section>
      <section>
        <h2 className={`${styles.h2}`}>Writing</h2>
        <ul className={`${styles.unorderedList}`}>
          {postsByDate.map(post => (
            <li key={`post-${post.data.name}`}>
              <Link {...post}><a href={post.data.url} className={`${styles.link}`} title={post.data.title}>{post.data.title}</a></Link>
            </li>
          ))}
        </ul>
        <Link href="/writing">
          <a href="/writing" className="no-underline near-black bg-near-white pv1 ph2 f7 f6-ns br-pill b">
            View all <span className="sans-serif">→</span>
          </a>
        </Link>
      </section>
    </Wrapper>
  );
};

Index.propTypes = {
  posts: PropTypes.array,
};

export default withPosts(Index);
