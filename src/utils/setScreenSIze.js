export const getScreenSize = () => {
  const w = window,
    d = document,
    documentElement = d.documentElement,
    body = d.getElementsByTagName('body')[0],
    width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

  return width < 720 ? 'small' : 'large';
};
