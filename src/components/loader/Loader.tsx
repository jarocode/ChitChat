import React from 'react';

import "./loader.css";

interface LoaderProps {
  color?: string;
  containerWidth?: string;
}

const Loader: React.FC<LoaderProps> = ({ color, containerWidth = "100%" }) => (
    <div className="loader-wrapper" style={{ width: containerWidth }}>
      <div className="lds-ellipsis">
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );

export default Loader;
