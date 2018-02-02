---
title: Gradient Text, Borders, and Backgrounds for Buttons
date: 2015-12-28
category: writing
tags: [code]
---

Working with [Trillectro](https://twitter.com/trillectro) has resulted in the use of **a lot** of gradients. After exploring a few different button styles, I came up with a good solution for gradient ghost buttons with gradient text. To make my life easier, I created a couple of Sass mixins that would allow me to reuse those styles throughout the project when needed.

When creating a class for gradient text, it is best to apply it to a `<span>` tag so that the gradient is clipped only to the text itself. The [pen](http://codepen.io/laurendorman/pen/ZQBYmV) below shows how those styles are used.

<iframe height='265' scrolling='no' title='Sass Mixins - Gradient Text, Borders & Backgrounds for Buttons' src='//codepen.io/laurendorman/embed/ZQBYmV/?height=265&theme-id=0&default-tab=result&embed-version=2' frameBorder='no' allowFullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/laurendorman/pen/ZQBYmV/'>Sass Mixins - Gradient Text, Borders & Backgrounds for Buttons</a> by Lauren Dorman (<a href='https://codepen.io/laurendorman'>@laurendorman</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

I created a [gist](https://gist.github.com/laurendorman/2af852cd1eb92c713a1c) to host the mixins along with simple directions on how to use them.

These mixins are best used with [Autoprefixer](https://github.com/postcss/autoprefixer) or your favorite post-processor for cross-browser compatibility.

Enjoy!
