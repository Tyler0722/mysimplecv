import React from 'react';
import styled from 'styled-components';

import Avatar from 'src/components/Avatar';

export const Header = styled.div`
  margin-bottom: 30px;
  text-align: center;

  .avatar {
    margin-bottom: 1.5rem;
  }
`;

export const FullName = styled.h2`
  color: #252525;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 0.6rem;
`;

export const Username = styled.p`
  color: #555555;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

const ProfileGist = (props) => {
  const { name, username } = props;
  return (
    <Header>
      <Avatar name={name} size={100} />
      <FullName>{name}</FullName>
      <Username>{username}</Username>
    </Header>
  );
};

export default ProfileGist;
