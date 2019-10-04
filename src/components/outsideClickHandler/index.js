import React, { useEffect, useRef } from 'react';

const OutsideAlerter = (props) => {
  const { onOutsideClick, style = {}, children } = props;

  const el = useRef(null);

  useEffect(() => {
    document
      .getElementById('root')
      .addEventListener('mousedown', handleOutsideClick);

    return () => {
      document
        .getElementById('root')
        .removeEventListener('mousedown', handleOutsideClick);
    };
  });

  const handleOutsideClick = (event) => {
    if (!el.current.contains(event.target)) {
      onOutsideClick();
    }
  };

  return (
    <div style={style} ref={el}>
      {children}
    </div>
  );
};

export default OutsideAlerter;
