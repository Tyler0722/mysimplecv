import React from 'react';
import styled from 'styled-components';

import Avatar from 'src/components/Avatar';

export const Wrapper = styled.div`
  padding: 3rem 0 3rem 10rem;
  background: #f6f7f9;
  border-radius: 4px;
  position: relative;
  margin-bottom: 3rem;

  .avatar {
    position: absolute;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const FullName = styled.h3`
  font-weight: 500;
  color: #334150;
  line-height: 1.6rem;
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
`;

export const Username = styled.p`
  color: #555555;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

const B = (props) => {
  return (
    <Wrapper>
      <Avatar name="Vladimir Raksha" size={60} />
      <FullName>Vladimir Raksha</FullName>
      <Username>Vladimir33</Username>
    </Wrapper>
  );
};

export default B;
