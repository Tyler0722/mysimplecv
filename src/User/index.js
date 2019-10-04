import React from 'react';
import { Link } from 'react-router-dom';

import UserAvatar from 'src/components/Avatar';
import {
  useResumeState,
  useResumeDispatch
} from 'src/components/context/ResumeContext';

import { Container, Content, Name, Headline } from './style';

const UserPanel = (props) => {
  const { name, headline } = props;

  return (
    <Container>
      <Content>
        <UserAvatar name={name} size={60} />
        <Name>{name}</Name>
        <Headline>{headline}</Headline>
      </Content>
      <ul>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <a href="https://api.mysimplecv.com">Sign Out</a>
        </li>
      </ul>
    </Container>
  );
};

export default UserPanel;
