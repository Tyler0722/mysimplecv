import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const B = styled.div`
  background: #e1e4ea;
  color: #4ca1fe;
  line-height: 4.4rem;
  border: 1px solid #4ca1fe;
  padding: 0 1.8rem;
  font-size: 1.4rem;
  border-radius: 4px 0 0 4px;

  background: #f6f7f9;
  color: #5f789b;
  border: 1px solid #e1e4ea;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border: 1px solid #e1e8ee;
  padding: 12px 12px 12px 12px;
  line-height: 20px;
  color: #676767;
  border-radius: 0 4px 4px 0;
  border: 1px solid #4ca1fe;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #e1e4ea;
  border-left: none;

  ::-webkit-input-placeholder {
    color: #c8c8c8;
    font-size: inherit;
    font-family: inherit;
  }
`;

const Linkk = (props) => {
  return (
    <Wrapper>
      <B>https</B>
      <Input />
    </Wrapper>
  );
};

export default Linkk;
