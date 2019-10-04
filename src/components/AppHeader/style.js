import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  padding: calc((96px - 42px) / 2) 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  div.abs {
    position: fixed;
    right: 3.5rem;
    top: 2.7rem; // 96 - 42 = 54
  }
`;

export const Crumbs = styled.div`
  font-size: 16px;
  line-height: 42px;
`;

export const Cancel = styled(Link)`
  display: inline-block;
  font-size: 1.5rem;
  margin-right: 1.5rem;
  color: #555555;
`;
