import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #e1e5ea;
  border-radius: 4px;
  position: relative;

  ul {
    border-radius: 0 0 4px 4px;
  }

  li {
    display: inline-block;
    width: 50%;
  }

  li:first-child {
    border-right: 1px solid #e1e5ea;
  }

  a {
    display: block;
    text-align: center;
    padding: 1.2rem 0;
    color: #555555;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1;
  }

  a:hover {
    text-decoration: none;
    background: #f7f7f7;
  }
`;

export const Content = styled.div`
  padding: 0 2rem 2rem 2rem;
  text-align: center;
  border-bottom: 1px solid #e1e5ea;
  margin-top: -1.5rem;

  .avatar {
    margin-bottom: 1.5rem;
  }
`;

export const Name = styled.h4`
  color: #252525;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.2rem;
`;

export const Headline = styled.p`
  color: #9c9da0;
  font-size: 1.5rem;
  font-weight: 400;
`;
