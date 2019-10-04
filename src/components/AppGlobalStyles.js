import { createGlobalStyle } from 'styled-components';

import {
  APP_BACKGROUND_COLOR,
  APP_TEXT_COLOR,
  APP_SCROLLBAR_COLOR
} from 'src/styles/variables';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-height: 100%;
  }

  body {
    background-color: ${APP_BACKGROUND_COLOR};
    background: #f5f6fa;
    color: ${APP_TEXT_COLOR};
    height: 100%;
    font-family: 'Helvetica Now Text';
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  ::-webkit-input-placeholder, button, input, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  input:focus, textarea:focus, button:focus {
    outline: none;
  }

  ol, ul {
    list-style: none;
  }

  /* ::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }

  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-track {
    background-clip: padding-box;
    border-width: 3px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;
    background-color: ${APP_SCROLLBAR_COLOR};
  }

  ::-webkit-scrollbar-track {
    border-width: initial;
    border-color: transparent;
    background-color: transparent;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  } */
`;
