import React from 'react';
import styled from 'styled-components';

export const PageWrapper = styled.div``;

const Page = (props) => {
  return (
    <PageWrapper>
      {props.children}
    </PageWrapper>
  );
};

export default Page;
