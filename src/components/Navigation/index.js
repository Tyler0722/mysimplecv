import React from 'react';
import { Link } from 'react-router-dom';

import ProgressBar from 'src/components/ProgressBar';
import { useResumeState } from 'src/components/context/ResumeContext';
import { MAX_SKILLS, MAX_DEGREES, MAX_POSITIONS } from 'src/helpers/resume';
// import { useResumeState, useResumeDispatch } from 'src/helpers/resume-context';

import {
  Wrapper,
  Header,
  Wrap,
  Status,
  Label,
  Menu,
  MenuItem,
  MenuLink,
  Footer
} from './style';
import UserPanel from '../../User';

const Navigation = (props) => {
  const {
    published,
    name,
    headline,
    positions,
    degrees,
    skills
  } = useResumeState();

  return (
    // <Wrapper>
    //   <Header>
    //     <Content>
    //       <ProgressBar percent={0} />
    //       <Status>{published ? 'Published' : 'Unpublished'}</Status>
    //     </Content>
    //   </Header>
    //   <Content>
    //     <Menu>
    //       <MenuTitle>view</MenuTitle>
    //       <MenuItem>
    //         <MenuLink to="/">Resume</MenuLink>
    //       </MenuItem>
    //     </Menu>
    //     <Menu>
    //       <MenuTitle>update</MenuTitle>
    //       <MenuItem>
    //         <MenuLink to="/experience">Experience</MenuLink>
    //         <span>
    //           {positions.length} / {MAX_POSITIONS}
    //         </span>
    //       </MenuItem>
    //       <MenuItem>
    //         <MenuLink to="/education">Education</MenuLink>
    //         <span>
    //           {degrees.length} / {MAX_DEGREES}
    //         </span>
    //       </MenuItem>
    //       <MenuItem>
    //         <MenuLink to="/skills">Skills</MenuLink>
    //         <span>
    //           {skills.length} / {MAX_SKILLS}
    //         </span>
    //       </MenuItem>
    //     </Menu>
    //   </Content>
    //   <Footer>
    //     <Content>
    //       <User />
    //     </Content>
    //   </Footer>
    // </Wrapper>
    <Wrapper>
      <Header>
        <Wrap>
          <ProgressBar percentage={30} />
          <Status>{published ? 'Published' : 'Unpublished'}</Status>
        </Wrap>
      </Header>
      <Wrap>
        <Label>View</Label>

        <ul className="l">
          <li>
            <Link to="/home">Resume</Link>
          </li>
        </ul>
        <Label>Update</Label>
        <ul className="l">
          <li>
            <Link to="/experience">Experience</Link>
            <span>
              {positions.length} / {MAX_POSITIONS}
            </span>
          </li>
          <li>
            <Link to="/education">Education</Link>
            <span>
              {degrees.length} / {MAX_DEGREES}
            </span>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
            <span>
              {skills.length} / {MAX_SKILLS}
            </span>
          </li>
        </ul>
      </Wrap>
      <Footer>
        <Wrap>
          <UserPanel name={name} headline={headline} />
        </Wrap>
      </Footer>
    </Wrapper>
  );
};

export default Navigation;
