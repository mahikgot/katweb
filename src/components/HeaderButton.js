import React, { useState } from 'react';

const HeaderButton = () => {
  const [margin, setMargin] = useState('auto 0.5rem');
  const onClickHandler = () => {
    setMargin('auto 0rem');
  };
  return (
    <div className="rightHome">
      <div
        className="flexContainerButtonHome"
      >
        <button
          type="button"
          style={{ backgroundColor: '#535FD4', margin }}
          onClick={onClickHandler}
        >
          about
        </button>
        <button
          type="button"
          style={{ backgroundColor: '#E6DF47', margin }}
        >
          works
        </button>
        <button
          type="button"
          style={{ backgroundColor: '#80D459', margin }}
        >
          contact
        </button>
      </div>
    </div>
  );
};

export default HeaderButton;
