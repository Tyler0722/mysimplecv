import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #202020;
  border-radius: 4rem;
`;

export const Bar = styled.div`
  background: #56d9a0;
  border-radius: 4rem;
  height: 1.5rem;
  transition: all 0.3s ease;
  width: ${(props) => props.percentage}%;
`;

const ProgressBar = (props) => {
  const { percentage = 0 } = props;

  return (
    <Wrapper>
      <Bar percentage={percentage} />
    </Wrapper>
  );
};

export default ProgressBar;
