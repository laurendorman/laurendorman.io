import React from 'react';
import withPosts from 'nextein/posts';
import Markdown from '../components/Markdown';

const data = {
  title: 'Colophon',
  header: 'Colophon',
  description: 'How this site was built.',
};

const content = `
## Design

### Styles
This site uses a customized version of [Tachyons](https://tachyons.io) – which allowed me to iterate through design decisions quickly while giving my site a personal touch.

### Typography
The primary typeface used on this site is using the system default sans-serif. For ~<code>~ I am using Monospace.

## Development

### Hosting
This website is hosted on Now.

### Frameworks
With the redesign of my site, I moved to React. This blog is built using Nextein – a blogging engine that was built on top of the Next infrastructure.

### Version Control
Version control is managed through ~$ git~ and stored in a repository on [GitHub](https://github.com/laurendorman/laurendorman.io).

### Universal SSL
I am using a Universal SSL in order to improve my [visibility](http://www.forbes.com/sites/johnrampton/2014/08/30/should-i-switch-from-http-to-https-for-seo-reasons/) on the web. SSL for this site is provided by Now.

### Analytics
This site uses [Google Analytics](http://www.google.com/analytics/) to track page visits and nothing more.`;

export default withPosts(() => <Markdown data={data}>{content}</Markdown>);
