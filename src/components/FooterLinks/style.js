import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.ul`
  margin: 0 auto;
  width: max-content;

  li {
    display: inline-block;
    margin-left: 1.5rem;
    font-size: 1.5rem;
  }

  li:first-child {
    margin-left: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: #aaaaaa;
`;
