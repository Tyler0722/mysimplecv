import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #1a73e8;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  line-height: 4rem;
  padding: 0 2rem;
  user-select: none;

  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  :hover {
    background: #1a73e8;
    text-decoration: none;
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: #56d9a0;

  :hover {
    background-color: #2ece88;
  }
`;

export const StyledSecondaryButton = styled(StyledButton)``;

export const StyledOutlineDangerButton = styled(StyledButton)`
  background: transparent;
  border: 1px solid #757575;
  color: #757575;

  :hover {
    background: #ff0033;
    border-color: transparent;
    color: #ffffff;
  }
`;
