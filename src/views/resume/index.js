import React from 'react';

import { useResumeState } from 'src/components/context/ResumeContext';
import AppViewWrapper from 'src/components/AppViewWrapper';
import VerticalScroller from 'src/components/VerticalScroller';
import AppHeader from 'src/components/AppHeader';
import Resume from 'src/components/Resume';

import { Container } from './style';

const ResumeView = (props) => {
  const resumeData = useResumeState();

  return (
    <AppViewWrapper>
      <VerticalScroller>
        <AppHeader crumb="Home" />
        <Container>
          <Resume {...resumeData} />
        </Container>
      </VerticalScroller>
    </AppViewWrapper>
  );
};

export default ResumeView;
