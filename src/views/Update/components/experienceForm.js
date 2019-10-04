import React, { useState } from 'react';

import Form from './form';
import { FieldWrapper } from '../style';
import TextField from 'src/components/TextField';
import TextArea from 'src/components/TextArea';

import {
  ADD_POSITION,
  UPDATE_POSITION,
  REMOVE_POSITION
} from 'src/components/context/ResumeContext';

const ExperienceForm = (props) => {
  const { index, position, dispatch, onSubmit, onRemove } = props;

  const [fields, setFields] = useState(position);

  function handleSubmit() {
    if (index !== -1) {
      dispatch({
        type: UPDATE_POSITION,
        payload: {
          index,
          entry: fields
        }
      });
    } else {
      dispatch({
        type: ADD_POSITION,
        payload: {
          entry: fields
        }
      });
    }

    onSubmit();
  }

  const handleRemove = () => {
    if (index !== -1) {
      dispatch({
        type: REMOVE_POSITION,
        payload: {
          index
        }
      });
    }

    onRemove();
  };

  function handleChange({ name, value }) {
    setFields({
      ...fields,
      [name]: value
    });
  }

  return (
    <Form onSubmit={handleSubmit} onRemove={handleRemove}>
      <FieldWrapper>
        <TextField
          id={'title'}
          label={'Position'}
          onChange={handleChange}
          value={fields.title || ''}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          id={'company'}
          label={'Company'}
          onChange={handleChange}
          value={fields.company || ''}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextArea
          id={'description'}
          label={'Description'}
          onChange={handleChange}
          value={fields.description || ''}
        />
      </FieldWrapper>
    </Form>
  );
};

export default ExperienceForm;
