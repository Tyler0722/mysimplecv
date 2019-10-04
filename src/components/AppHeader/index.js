import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import { capitalize } from 'src/helpers/utils';

import { Button } from 'src/components/Button';

import { Crumbs, Container, Cancel } from './style';

export const RightSide = styled.div`
  align-items: center;
  display: flex;

  ${(props) => {
    if (props.fixed) {
      return css`
        position: fixed;
        right: 3.5rem;
      `;
    }
  }}

  ul {
    line-height: 1;
  }

  li {
    display: inline-block;
    padding: 0 20px;
  }

  li:not(first-child) {
    border-right: 1px dotted #cccccc;
  }

  a {
    color: #555555;
    font-weight: 400;
    line-height: 1.6rem;
    font-size: 1.6rem;
  }
`;

const Header = (props) => {
  const { history, onSave } = props;
  const section = history.location.pathname.slice(1);
  const isEditingResume = ['experience', 'education', 'skills'].includes(
    section
  );
  const [published, setPublished] = useState(false);
  const isRoot = section === 'home';

  const renderRightSide = () => {
    if (isRoot) {
      return (
        <RightSide fixed={false}>
          <ul>
            <li>
              <Link to="/">Download</Link>
            </li>
            <li>
              <Link to="/">Public resume</Link>
            </li>
            <li
              style={{
                borderRight: 'none',
                paddingRight: '0'
              }}
            >
              {published ? (
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    setPublished(!published);
                  }}
                  to="/"
                >
                  Unpublish
                </Link>
              ) : (
                <Button
                  style={{
                    fontSize: '16px',
                    fontWeight: 400
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setPublished(!published);
                  }}
                >
                  Publish
                </Button>
              )}
            </li>
          </ul>
        </RightSide>
      );
    }

    return (
      <RightSide fixed={true}>
        <Cancel to="/home">Cancel</Cancel>
        <Button>Save</Button>
      </RightSide>
    );
  };

  return (
    <Container>
      <Crumbs>{props.crumb}</Crumbs>
      {renderRightSide()}
    </Container>
  );
};

export default withRouter(Header);
