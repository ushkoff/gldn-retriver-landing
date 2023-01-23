import React, { FC } from 'react';

const GridBackground: FC = () => {
  return (
      <div
          style={{
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              top: 0,
              left: 0,
              opacity: 0.5,
              zIndex: -1
          }}
      >
          <div className="bgContainer">
              <div className="lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
              </div>
              <div className="lines">
                  <div className="line H"></div>
                  <div className="line H"></div>
                  <div className="line H"></div>
                  <div className="line H"></div>
                  <div className="line H"></div>
                  <div className="line H"></div>
                  <div className="line H"></div>
                  <div className="line H"></div>
                  <div className="line H"></div>
                  <div className="line H"></div>
              </div>
          </div>
      </div>
  );
};

export default GridBackground;