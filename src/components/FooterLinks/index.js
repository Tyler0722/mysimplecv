import React from 'react';

import { Wrapper, StyledLink } from './style';

const Links = (props) => {
  return (
    <Wrapper>
      {props.links.map((link) => {
        return (
          <li>
            <StyledLink to={link.url}>{link.name}</StyledLink>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default Links;
