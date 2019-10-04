import React from 'react';

import { Container } from 'src/components/common/layout';
import VerticalScroller from 'src/components/common/verticalScroller';
import ResumeContainer from 'src/containers/resumeContainer';

const Home = (props) => {
  return (
    <VerticalScroller>
      <Container width={770}>
        <ResumeContainer />
      </Container>
    </VerticalScroller>
  );
};

export default Home;
