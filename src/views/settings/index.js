import React, { useState } from 'react';

import { useResumeState } from 'src/components/context/ResumeContext';
import AppViewWrapper from 'src/components/AppViewWrapper';
import VerticalScroller from 'src/components/VerticalScroller';
import AppHeader from 'src/components/AppHeader';
import TextField from 'src/components/TextField';
import TextArea from 'src/components/TextArea';
import B from 'src/components/B';

import { Container, Form } from './style';

const Settings = (props) => {
  const resumeState = useResumeState();

  const [fields, setFields] = useState(resumeState);

  const handleChange = ({ name, value }) => {
    setFields({
      ...fields,
      [name]: value
    });
  };

  const renderTextInput = (options) => {
    const { id, label, placeholder } = options;

    return (
      <div
        style={{
          marginBottom: '2rem'
        }}
      >
        <TextField
          id={id}
          label={label}
          onChange={handleChange}
          placeholder={placeholder}
          value={fields[id]}
        />
      </div>
    );
  };

  return (
    <AppViewWrapper>
      <VerticalScroller>
        <AppHeader crumb="Settings" onSaveButtonClick={null} />
        <Container>
          <Form>
            <B />
            {renderTextInput({
              id: 'name',
              label: 'Name',
              placeholder: 'Gavin Wolfe'
            })}
            {renderTextInput({
              id: 'headline',
              label: 'Headline',
              placeholder: 'Software Developer'
            })}
            <TextArea
              id="summary"
              label="Summary"
              onChange={handleChange}
              value={fields.summary}
              style={{
                marginBottom: '4rem'
              }}
            />
            {renderTextInput({
              id: 'phone',
              label: 'Phone',
              placeholder: '3183333333'
            })}
            {renderTextInput({
              id: 'email',
              label: 'Email',
              placeholder: '...'
            })}
            {renderTextInput({
              id: 'website',
              label: 'Website',
              placeholder: 'mysimplecv.com'
            })}
          </Form>
        </Container>
      </VerticalScroller>
    </AppViewWrapper>
  );
};

export default Settings;
