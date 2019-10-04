import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledButton, StyledPrimaryButton } from 'src/components/Button/style';

export const scaleUp = keyframes`
    from {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
        opacity: 1;
    }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr max-content;
`;

// Form Styles
export const Form = styled.form`
  animation: ${scaleUp} 0.3s ease;
  background: #ffffff;
  border-radius: 4px;
  padding: 3.2rem;
  transition: 0.3s ease;
`;

export const DoneButton = styled(StyledButton)`
  margin-bottom: 1rem;
  width: 100%;
`;

export const RemoveLinkWrapper = styled.div`
  margin: 0 auto;
  width: max-content;
`;

export const FieldWrapper  = styled.div`
  margin-bottom: 1.5rem;
`;

export const RemoveLink = styled(Link)`
  align-items: center;
  color: #aaaaaa;
  display: inline-flex;
  font-size: 1.4rem;
  line-height: 1.4rem;
  margin: 0 auto;
  width: max-content;

  svg {
    fill: currentColor;
    height: 1.4rem;
    margin-right: 0.2rem;
    width: 1.4rem;
  }

  :hover {
    text-decoration: underline;
  }
`;

export const AddButton = styled(StyledPrimaryButton)`
  animation: ${scaleUp} 0.3s ease;
  background: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  width: 100%;

  :hover {
    background: ${(props) => props.color};
  }
`;

export const AddButtonCount = styled.span`
  font-weight: 400;
`;

export const DatePickers = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  display: grid;
`;

export const D = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0;
    padding: 0;
  }
`;
