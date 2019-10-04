import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'avatar'
})`
  align-items: center;
  background: #56d9a0;
  border-radius: 100%;
  color: #ffffff;
  cursor: default;
  display: inline-flex;
  font-size: ${(props) => props.size / 3}px;
  height: ${(props) => props.size}px;
  justify-content: center;
  position: relative;
  user-select: none;
  width: ${(props) => props.size}px;
`;
