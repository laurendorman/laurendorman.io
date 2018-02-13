import React from 'react';
import withPosts from 'nextein/posts';
import Markdown from '../components/Markdown';

const data = {
  title: 'About',
  header: "Hi, I'm Lauren.",
};

const content = `
I am a Berlin-based design-oriented Product Engineer. I spend my days at [A Color Bright](http://acolorbright.com) building products and design systems.

Previously, I worked at [Cardinal Solutions](http://www.cardinalsolutions.com) where I built meaningful and engaging experiences under their UX roof working on a wide range of projects for clients like [Highlights](http://highlights.com), [Wright-Patt](http://mycumortage.com), [Dave Thomas Foundation](https://davethomasfoundation.org), and more.

Prior to that, I was an Apprentice at [Sparkbox](http://seesparkbox.com) where I learned about the best practices of building for the web from some of the best minds in the industry. And in the land before time, I worked at a small SaaS startup + studio in Chicago where I wore many hats 🎩✨ working on client sites, designs, wireframes &mdash; you name it.

## Speaking

* **CONFRONT**, Malmö, Sweden, August 17th, 2017
* **CSSconf EU**, Berlin, Germany, May 5th, 2017
* **Girl Develop It**, Columbus, OH, May 25th, 2016
* **Culture Talk: Change Agents**, Columbus, OH, June 12th, 2016
* **Craftini**, Virtual, August 4-5th, 2016

## Elsewhere

* [Feature](https://medium.com/glitch/we-the-people-using-glitch-for-activism-da84c1e41027) by Glitch
* [How we used Slack as a backend](https://medium.com/a-color-bright/how-we-used-slack-as-a-backend-4e794f19c3f2) on Medium
* [Interview](https://revisionpath.com/lauren-dorman/) with Revision Path
* [Interview](http://ohio-streets.com/2015/07/09/meet-the-designer-behind-hoist-and-oatws-collaboration-lauren-dorman-2/) with Ohio Streets
* [Guest Post](https://divshot.com/blog/guest/girl-scouts-workshop/) on Divshot
* [Guest Post](http://seesparkbox.com/foundry/big_city_transplant_in_a_small_techtown) on The Foundry


## Get in touch
If you would like me to speak at your conference, meetup or just want to chat — please [email me](mailto:hello@laurendorman.io) or [send me a note on Twitter](https://twitter.com/laurendorman).`;


export default withPosts(() => <Markdown data={data} className="measure-wide">{content}</Markdown>);
