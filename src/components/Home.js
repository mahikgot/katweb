import React from 'react';

const Home = () => {
  const onClickHandler = () => {
    console.log('tanga');
  };
  return (
    <div className="flexContainerHome">
      <div className="leftHome">
        <h1 className="nameHome">
          Kat, 22
        </h1>
        <p>
          Heavily influenced by 2014 Tumblr and a shameless enjoyer of most mainstream things
        </p>
      </div>
      <div className="rightHome">
        <div className="flexContainerButtonHome">
          <button
            type="button"
            style={{ backgroundColor: '#535FD4' }}
            onClick={onClickHandler}
          >
            about
          </button>
          <button
            type="button"
            style={{ backgroundColor: '#E6DF47' }}
          >
            works
          </button>
          <button
            type="button"
            style={{ backgroundColor: '#80D459' }}
          >
            contact
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
