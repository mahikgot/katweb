const setAnimate = ({ loc }) => {
  if (loc === '/') {
    return 'notHeader';
  }

  return 'header';
};

export { setAnimate };
