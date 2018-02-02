import React from 'react';
import MarkdownWrapper from '../components/MarkdownWrapper';

const data = {
  title: 'Colophon',
  header: 'Colophon',
  description: 'How this site was built.',
};

const content = `
This website was originally produced over the course of several weeks during my time as an apprentice at [Sparkbox](http://seesparkbox.com). As the need for a redesign approached, I refreshed my website during **#May1Reboot**.

## Design
When it came to design decisions, I took a rapid-prototyping approach. [CodePen](http://codepen.io) is where majority of my prototyping took place – where I was able to iterate quickly to get the ball rolling fast.

### Typography
This website uses two primary typefaces, Work Sans, served by [Google](http://google.com/fonts) alongside Monospace for ~<code>~ and ~<pre>~ things. Fallback fonts for Work Sans include Helvetica and system default sans-serif.

### Scalable Vector Graphics
The home button for this site is an SVG and was designed in Adobe Illustrator ~~then refined and [animated on CodePen](http://codepen.io/laurendorman/pen/VLeyxq)~~. SVGs are sprinkled throughout the site in the menu icon, work cards and whenever possible in just about every form you can implement them.

## Development

### Hosting
Hosting is generously provided by GitHub. I chose to use [GitHub Pages](http://github.com/pages) because it is free, reliable, and suits my current needs.

### Hexo
With the redesign of my site, I moved to [Hexo](http://hexo.io) from [Middleman](http://middlemanapp.com). Hexo is NodeJS based and is much easier to manage than the Ruby version that I previously built.

### Version Control
Version control is managed though ~$ git~ and stored in a repository on [GitHub](https://github.com/laurendorman/laurendorman.github.io).

### Universal SSL
I am using a Universal SSL in order to improve my [visibility](http://www.forbes.com/sites/johnrampton/2014/08/30/should-i-switch-from-http-to-https-for-seo-reasons/) on the web. SSL for this site is provided by [CloudFlare](https://blog.cloudflare.com/introducing-universal-ssl/).

### Analytics
This site uses [Google Analytics](http://www.google.com/analytics/), served by [CloudFlare](http://cloudflare.com).`;

export default () => <MarkdownWrapper data={data}>{content}</MarkdownWrapper>;
