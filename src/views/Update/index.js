import React, { useState, useEffect } from 'react';

import AppViewWrapper from 'src/components/AppViewWrapper';
import {
  useResumeState,
  useResumeDispatch
} from 'src/components/context/ResumeContext';
import { Container } from 'src/components/Layout';
import Resume from 'src/components/Resume';
import { MAX_POSITIONS, MAX_DEGREES, MAX_SKILLS } from 'src/helpers/resume';

import { Content, AddButton, AddButtonCount } from './style';
import SkillForm from './components/skillForm';
import EducationForm from './components/educationForm';

import ExperienceForm from './components/experienceForm';
import VerticalScroller from 'src/components/VerticalScroller';
import AppHeader from 'src/components/AppHeader';
import { capitalize } from 'src/helpers/utils';

const Update = (props) => {
  const { history } = props;
  const [index, setIndex] = useState(-1);

  const [showForm, setShowForm] = useState(false);

  const section = history.location.pathname.slice(1);

  const {
    name,
    headline,
    summary,
    positions,
    degrees,
    skills
  } = useResumeState();
  const dispatch = useResumeDispatch();

  console.log(skills);

  useEffect(() => {
    const unlisten = history.listen(() => {
      setShowForm(false);
      setIndex(-1);
    });

    return () => unlisten();
  });

  function toggleForm() {
    setShowForm(!showForm);
  }

  function handleSelect(index) {
    setIndex(index);
    toggleForm();
  }

  function handleClosing() {
    setIndex(-1);
    toggleForm();
  }

  // IDK
  const sswch = (exp, edu, ski) => {
    switch (section) {
      case 'experience':
        return exp;
      case 'education':
        return edu;
      case 'skills':
        return ski;
    }
  };

  const withProps = (Component) => {
    return (
      <Component
        index={index}
        onRemove={handleClosing}
        onSubmit={handleClosing}
        position={positions[index] || {}}
        degree={degrees[index] || {}}
        skill={skills[index] || ''}
        dispatch={dispatch}
      />
    );
  };

  const renderForm = () => {
    return withProps(sswch(ExperienceForm, EducationForm, SkillForm));
  };

  const renderButton = () => {
    return (
      <AddButton
        color={sswch('#56d9a0', '#1a73e8', '#EF9A04')}
        onClick={toggleForm}
      >
        <span>Add {sswch('Postion', 'Degree', 'Skill')}</span>
        <AddButtonCount>
          {sswch(positions.length, degrees.length, skills.length)} /{' '}
          {sswch(MAX_POSITIONS, MAX_DEGREES, MAX_SKILLS)}
        </AddButtonCount>
      </AddButton>
    );
  };

  return (
    <AppViewWrapper>
      <VerticalScroller>
        <AppHeader crumb={`Update ${section}`} />
        <Container>
          <Content>
            <div>{showForm ? renderForm() : renderButton()}</div>
            <Resume
              name={name}
              headline={headline}
              summary={summary}
              positions={positions}
              degrees={degrees}
              skills={skills}
              onSelect={handleSelect}
            />
          </Content>
        </Container>
      </VerticalScroller>
    </AppViewWrapper>
  );
};

export default Update;
