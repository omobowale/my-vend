export const getScreenSize = () => {
    const w = window,
    d = document,
    documentElement = d.documentElement,
    body = d.getElementsByTagName('body')[0],
    width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

    return width < 720 ? 'small' : 'large';
};
  
export const getCompareScreenSize = () => {
    const w = window,
    d = document,
    documentElement = d.documentElement,
    body = d.getElementsByTagName('body')[0],
    width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    if(width < 550){
        return 'small';
    }
    else if(width < 800){
        return 'medium'
    }

    return 'large';
};
  