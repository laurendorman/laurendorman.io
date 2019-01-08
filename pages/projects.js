import React from 'react';
import PropTypes from 'prop-types';
import withPosts, { inCategory, sortByDate } from 'nextein/posts';
import Wrapper from '../components/Wrapper';

const Projects = ({ posts }) => {
  const workByDate = posts.filter(inCategory('projects')).sort(sortByDate);

  const data = {
    title: 'Projects',
    header: 'Selected works and experiments.',
    description: 'Selected works and experiments.',
  };

  return (
    <Wrapper data={data}>
      <section className="flex flex-wrap">
        {workByDate.map((post) => {
        const projectLink = post.data.case_study ? `${post.data.url}` : `${post.data.project_link}`;
        const projectCta = post.data.case_study ? 'Read case study' : 'View project';
        const externalLink = !post.data.case_study ? '_blank' : null;
        return (
          <div key={`work-${post.data.name}`} className="pv2 pa2-ns w-100 w-50-ns">
            <a href={projectLink} target={externalLink} className="no-underline white">
              <div className={`white br2 shadow-4 grow pa3 pa4-ns h-100 ${post.data.class}`}>
                <h1 className="f4 mt0 fw7">
                  <span role="img" aria-label={post.data.emoji_name}>{post.data.emoji}</span> {post.data.title}
                </h1>
                <p>{post.data.description}</p>
                <p>{post.data.role}</p>
                <span className="bg-white-30 pv1 ph2 f7 f6-ns br-pill b">
                  {projectCta}<span className="pl1 sans-serif">→</span>
                </span>
              </div>
            </a>
          </div>
        );
      })}
        <div key="contact" className="pv2 pa2-ns w-100 w-50-ns">
          <a href="mailto:hello@laurendorman.io" className="no-underline">
            <div className="white br2 shadow-4 grow pa3 pa4-ns h-100 contact-card">
              <h1 className="f4 mt0 fw7"><span role="img" aria-label="Smiling Face With Smiling Eyes">😊</span> Want to work together?</h1>
              <p>I am available for small-to-mid size projects that are the right fit.</p>
              <p>Sound good?</p>
              <span className="bg-white-30 pv1 ph2 f7 f6-ns br-pill b">
                Get in touch<span className="pl1 sans-serif">→</span>
              </span>
            </div>
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

Projects.propTypes = {
  posts: PropTypes.array,
};

export default withPosts(Projects);
