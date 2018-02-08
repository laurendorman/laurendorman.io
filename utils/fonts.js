import FontFaceObserver from 'fontfaceobserver';

const FontsLoaded = () => {
  Promise.all([
    new FontFaceObserver('Apercu', { weight: 400 }).load(),
    new FontFaceObserver('Apercu', { weight: 700 }).load(),
  ]).then(() => {
    document.body.classList.add('apercu')
    window.sessionStorage.criticalFontsLoaded = true;
  });
};

export default FontsLoaded;
