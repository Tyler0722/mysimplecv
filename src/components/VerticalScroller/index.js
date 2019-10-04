import React from 'react';

import { ScrollerWrapper, Scroller } from './style';

const VerticalScroller = (props) => {
  return (
    <ScrollerWrapper>
      <Scroller>{props.children}</Scroller>
    </ScrollerWrapper>
  );
};

export default VerticalScroller;
