import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { NAVBAR_WIDTH } from 'src/components/Layout';

export const Wrapper = styled.aside`
  background: #000;
  color: #ffffff;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  user-select: none;
  width: ${NAVBAR_WIDTH / 10}rem;

  ul.l {
    margin-bottom: 3rem;
  }

  ul.l li {
    margin-bottom: 1rem;
    position: relative;
  }

  ul.l li:last-child {
    margin-bottom: 0;
  }

  ul.l a {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 400;
  }

  ul.l span {
    position: absolute;
    right: 0;
    font-size: 1.6rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Wrap = styled.div`
  padding: 3rem;
`;

export const Header = styled.header``;

export const Status = styled.div`
  color: #ccd0d3;
  font-size: 1.2rem;
  margin-top: 0.6rem;
  text-align: right;
`;

export const Menu = styled.ul`
  margin-bottom: 3rem;
`;

export const Label = styled.h3`
  color: #9c9da0;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const MenuItem = styled.li`
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;

  span {
    color: #ccd0d3;
    font-size: 1.4rem;
  }
`;

export const MenuLink = styled(Link)`
  color: #ffffff;
`;

export const Footer = styled.footer`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
`;
