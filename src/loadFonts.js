import FontFaceObserver from 'fontfaceobserver';

const fonts = ['rubik-light' ,'rubik-regular' ,'rubik-bold' ,'rubik-black'];

export default Promise.all(
  fonts.map(font => new FontFaceObserver(font).load())
);
