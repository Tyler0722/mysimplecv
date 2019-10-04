import React from 'react';
import styled from 'styled-components';

import Header from 'src/components/AppHeader';
import Navigation from 'src/components/Navigation';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100vh;
`;

const AppViewWrapper = (props) => {
  return (
    <Wrapper>
      <Navigation />
      {props.children}
    </Wrapper>
  );
};

export default AppViewWrapper;
