import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;

  header {
    padding-top: 5rem;
  }

  ul {
    width: max-content;
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  li {
    padding-left: 2rem;
    display: inline-block;
    font-size: 1.6rem;
    line-height: 1;
    color: #555555;
    font-weight: 400;
  }

  li.hi {
    padding: 0 2rem;
    border-right: 1px dotted #cccccc;
  }

  a {
    font-size: 1.6rem;
    line-height: 1;
    font-weight: 400;
    color: #555555;
    display: inline-flex;
    align-items: center;
  }

  svg {
    height: 1.8rem;
    width: 1.8rem;
    fill: currentColor;
  }

  svg:first-child {
    margin-right: 0.6em;
  }

  svg:last-child {
    margin-left: 1.6rem;
  }
`;

const PageHeader = (props) => {
  return (
    <Container>
      <header>
        <ul>
          {[
            {
              name: 'Help',
              url: '/help'
            },
            {
              name: 'Jobs',
              url: '/jobs'
            },
            {
              name: 'Apps',
              url: '/apps'
            }
          ].map((link, index) => {
            return (
              <li className={index === 2 && 'hi'}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            );
          })}
          <li>
            <a className="h" href="http://localhost:5000/api/auth/google">
              <svg viewBox="0 0 512 512">
                <path
                  d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
        c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
        c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
        c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
        c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
        c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
        C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
        C480.224,136.96,497.728,118.496,512,97.248z"
                />
              </svg>
              Sign In
              <svg viewBox="0 0 268.832 268.832">
                <path
                  d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5
        c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678
        c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </header>
    </Container>
  );
};

export default PageHeader;
