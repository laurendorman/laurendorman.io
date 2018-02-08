import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import FontFaceObserver from 'fontfaceobserver';

export default class MyDocument extends Document {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage();
    return {
      html, head, errorHtml, chunks,
    };
  }

  componentDidMount() {
    Promise.all([new FontFaceObserver('Apercu').load()])
      .then(() => { this.setState({ isLoading: false }); })
      .catch((error) => {
        console.error('Failed to load fonts!', error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { isLoading } = this.state;
    const fontsLoaded = isLoading ? 'apercu' : '';
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/static/css/styles.min.css" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="description" content="I&apos;m a designer and front-end developer who is passionate about making the web both beautiful and usable." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Lauren Dorman" />
          <meta property="og:url" content="https://laurendorman.io/" />
          <meta property="og:site_name" content="Lauren Dorman" />
          <meta property="og:description" content="I&apos;m a designer and front-end developer who is passionate about making the web both beautiful and accessible." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Lauren Dorman" />
          <meta name="twitter:description" content="I&apos;m a designer and front-end developer who is passionate about making the web both beautiful and accessible." />
          <meta name="twitter:image" content="/static/twitter_summary_card@2x.png" />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/apple-touch-icon-114x144.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
          <meta name="apple-mobile-web-app-title" content="Lauren Dorman" />
          <meta name="application-name" content="Lauren Dorman" />
          <meta name="msapplication-TileColor" content="#5b3c70" />
          <meta name="msapplication-TileImage" content="/static/mstile-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className={`${fontsLoaded} sans-serif near-black f5 f4-ns`}>
          <Main />
          <NextScript />
        </body>
        <script dangerouslySetInnerHTML={{
          __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-63186272-1', 'auto');
          ga('send', 'pageview');`,
        }}
        />
      </html>
    );
  }
}
