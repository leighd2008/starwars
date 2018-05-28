import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'auto', height: '150px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
