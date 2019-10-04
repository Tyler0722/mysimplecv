import React from 'react';

import {
  ResumeContainer,
  Introduction,
  Heading,
  FullName,
  Headline,
  Summary,
  Content,
  Entry,
  EntryTitle,
  Description,
  School,
  Company,
  Timeframe,
  SectionTitle,
  Skill
} from './style';
import UserAvatar from 'src/components/Avatar';
import Placeholder from './Placeholder';

const Resume = (props) => {
  const {
    name,
    headline,
    summary,
    positions,
    degrees,
    skills,
    onSelect
  } = props;

  const renderPlaceholders = (type, count) => {
    if (type != 'experience' && type != 'education' && type != 'skills') {
      return;
    }
    let placeholders = [];
    for (let i = 0; i < count; i++) {
      placeholders.push(<Placeholder type={type} />);
    }
    return placeholders;
  };

  return (
    <ResumeContainer>
      <Introduction>
        <Heading>
          <UserAvatar name={name} size={52} />
          <FullName>{name}</FullName>
          <Headline>{headline}</Headline>
        </Heading>
        <Summary>{summary}</Summary>
      </Introduction>
      <Content>
        <div>
          <SectionTitle color={'#56d9a0'}>Experience</SectionTitle>
          {positions.map((position, index) => {
            const { title, company, description } = position;
            return (
              <Entry onClick={() => onSelect(index)}>
                <EntryTitle>{title}</EntryTitle>
                <Description>
                  <Company>{company}</Company> - {description}
                </Description>
                <Timeframe>Feb 2017 - June 2017</Timeframe>
              </Entry>
            );
          })}
          {renderPlaceholders('experience', 4 - positions.length)}
        </div>
        <div>
          <div>
            <SectionTitle color={'#1a73e8'}>Education</SectionTitle>
            {degrees.map(({ degree, school }, index) => (
              <Entry onClick={() => onSelect(index)}>
                <EntryTitle>{degree}</EntryTitle>
                <Description>
                  <School>{school}</School>
                </Description>
                <Timeframe>Feb 2017 - June 2017</Timeframe>
              </Entry>
            ))}
            {renderPlaceholders('education', 2 - degrees.length)}
          </div>
          <div>
            <SectionTitle color={'#EF9A04'}>Skills</SectionTitle>
            {skills.map((skill, index) => (
              <Skill onClick={() => onSelect(index)}>{skill}</Skill>
            ))}
            {renderPlaceholders('skills', 10 - skills.length)}
          </div>
        </div>
      </Content>
    </ResumeContainer>
  );
};

export default Resume;
