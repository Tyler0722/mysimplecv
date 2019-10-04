import React, { useState } from 'react';

import Form from './form';

import {
  ADD_DEGREE,
  UPDATE_DEGREE,
  REMOVE_DEGREE
} from 'src/components/context/ResumeContext';

import TextField from 'src/components/TextField';
import { FieldWrapper } from '../style';

const EducationForm = (props) => {
  const { degree, index, onSubmit, onRemove, dispatch } = props;

  const [state, setState] = useState(degree);

  function handleSubmit() {
    if (index !== -1) {
      dispatch({
        type: UPDATE_DEGREE,
        payload: {
          entry: state,
          index
        }
      });
    } else {
      dispatch({
        type: ADD_DEGREE,
        payload: {
          entry: state
        }
      });
    }

    onSubmit();
  }

  function handleChange({ name, value }) {
    setState({ ...state, [name]: value });
  }

  return (
    <Form
      onSubmit={handleSubmit}
      onRemove={() => {
        dispatch({
          type: REMOVE_DEGREE,
          payload: {
            index
          }
        });
        onRemove();
      }}
    >
      <FieldWrapper>
        <TextField
          id="degree"
          label="Degree"
          onChange={handleChange}
          placeholder="Bachelor of Science"
          value={state.degree || ''}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          id="school"
          label="School"
          onChange={handleChange}
          placeholder="MIT"
          value={state.school || ''}
        />
      </FieldWrapper>
    </Form>
  );
};

export default EducationForm;
