import React, { useState } from 'react';

import Form from './form';
import { FieldWrapper } from '../style';
import TextField from 'src/components/TextField';

import {
  ADD_SKILL,
  UPDATE_SKILL,
  REMOVE_SKILL
} from 'src/components/context/ResumeContext';

const SkillForm = (props) => {
  const { index, onSubmit, onRemove, dispatch } = props;

  const [skill, setSkill] = useState(props.skill);

  console.log(skill);

  function handleSubmit() {
    if (index !== -1) {
      // UPDATE_SKILL
      dispatch({
        type: UPDATE_SKILL,
        payload: {
          skill,
          index
        }
      });
    } else {
      dispatch({
        type: ADD_SKILL,
        payload: {
          skill
        }
      });
    }

    onSubmit();
  }

  function handleChange({ value }) {
    setSkill(value);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      onRemove={() => {
        dispatch({
          type: REMOVE_SKILL,
          payload: {
            index
          }
        });
        onRemove();
      }}
    >
      <FieldWrapper>
        <TextField
          id="skill"
          label="Skill"
          onChange={handleChange}
          placeholder="Golang"
          value={skill}
        />
      </FieldWrapper>
    </Form>
  );
};

export default SkillForm;
