import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ProfileGist from '../../components/ProfileGist';
import axios from 'axios';

import TextField from 'src/components/TextField';
import { Button } from 'src/components/Button';

export const scaleUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px)
    }
    50% {
        opacity: 1;
        transform: translateY(0)
    }
`;

export const Help = styled.span`
  color: #aaaaaa;
  display: block;
  font-size: 1.2rem;
  line-height: 1.4rem;
  padding: 0.5rem 0 1.5rem;
`;

export const Container = styled.div`
  width: 48rem;
  padding: 10rem 0;
  margin: 0 auto;
  animation: ${scaleUp} 0.6s ease;
`;

const GettingStarted = (props) => {
  const [state, setState] = useState({
    headline: '',
    phone: '',
    email: '',
    website: ''
  });

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/api/users/@me', {
  //       withCredentials: true
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setState(response.data);
  //     });
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'put',
      url: 'http://localhost:5000/api/users/@me',
      data: state,
      withCredentials: true
    }).then((response) => {
      console.log(response);
    });
  };

  const handleChange = ({ name, value }) => {
    setState({
      ...state,
      [name]: value
    });
  };

  const renderTextInput = (options) => {
    const { id, label, placeholder } = options;
    return <TextField id={id} label={label} placeholder={placeholder} onChange={handleChange} value={state[id]} />;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ProfileGist name={state.name} username="Gavin33" />
        {renderTextInput({
          id: 'username',
          label: 'Username'
        })}
        {renderTextInput({
          id: 'headline',
          label: 'Headline'
        })}
        <Help>Specify what you do in 3-4 words.</Help>
        {renderTextInput({
          id: 'phone',
          label: 'Phone'
        })}
        <Help>Display on your public resume and PDF. Every will be able to see it.</Help>
        {renderTextInput({
          id: 'email',
          label: 'Email'
        })}
        <Help>Specify an email you check often</Help>
        {renderTextInput({
          id: 'website',
          label: 'Website'
        })}
        <Help>Let employers know where they can l earn more about you at.</Help>
        <Button
          style={{
            width: '100%'
          }}
        >
          Finish
        </Button>
      </form>
    </Container>
  );
};

export default GettingStarted;
