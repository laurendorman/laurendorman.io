/* eslint-disable no-undef */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';


import Navigation from './Navigation';
import Footer from './Footer';

import { initGA, logPageView } from '../utils/analytics';
import { formatDate } from '../utils/date';
import { styles } from '../constants/styles';

export default class Wrapper extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  renderDate() {
    if (this.props.data.date) {
      return (
        <time className="mid-gray ttu f6 f5-ns">{formatDate(this.props.data.date)}</time>
      );
    }
    return null;
  }

  renderHeader() {
    if (this.props.data.header) {
      return (
        <header className={`${styles.wrapper}`}>
          <div className="measure-wide mt5 mb4">
            <h2 className="f3 f2-ns mv0 near-black mb0">{this.props.data.header}</h2>
            {this.renderDate()}
          </div>
        </header>
      );
    }
    return null;
  }

  render() {
    const { data, className, children: content } = this.props;

    const title = data.title ? `${data.title}` : 'Lauren Dorman';
    const cls = className ? `${className}` : '';
    const description = data.description ? data.description : 'Designer and developer who values human connection.';

    return (
      <div className="ma3 ma4-l">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content="Lauren Dorman" />
          <meta property="og:description" content={description} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </Head>
        <Navigation />
        {this.renderHeader()}
        <div className="mw8 center flex">
          <main className={`mb5 w-100 ${cls}`}>
            {content}
          </main>
        </div>
        <Footer />
        <script dangerouslySetInnerHTML={{
          __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
         ga('create', 'UA-63186272-1', 'auto');
         ga('send', 'pageview');`,
        }}
        />
      </div>
    );
  }
}

Wrapper.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  children: PropTypes.node,
};
