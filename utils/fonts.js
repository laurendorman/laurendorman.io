import FontFaceObserver from 'fontfaceobserver';

const FontsLoaded = () => {
  const Apercu = new FontFaceObserver('Apercu');

  Apercu.load().then(() => {
    document.body.classList.add('apercu');
  });
};

export default FontsLoaded;
