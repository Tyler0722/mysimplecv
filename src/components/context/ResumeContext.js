import React, { useReducer, useContext } from 'react';

export const ResumeStateContext = React.createContext();
export const ResumeDispatchContext = React.createContext();

export const ADD_POSITION = 'ADD_POSITION';
export const UPDATE_POSITION = 'UPDATE_POSITION';
export const REMOVE_POSITION = 'REMOVE_POSITION';

export const ADD_DEGREE = 'ADD_DEGREE';
export const UPDATE_DEGREE = 'UPDATE_DEGREE';
export const REMOVE_DEGREE = 'REMOVE_DEGREE';

export const ADD_SKILL = 'ADD_SKILL';
export const UPDATE_SKILL = 'UPDATE_SKILL';
export const REMOVE_SKILL = 'REMOVE_SKILL';

const resumeReducer = (state, action) => {
  switch (action.type) {
    case ADD_POSITION: {
      const positions = state.positions.slice(0);
      positions.push(action.payload.entry);
      return {
        ...state,
        positions
      };
    }
    case UPDATE_POSITION: {
      const positions = state.positions.slice(0);
      positions[action.payload.index] = action.payload.entry;
      return {
        ...state,
        positions
      };
    }
    case REMOVE_POSITION: {
      const positions = state.positions.slice(0);
      positions.splice(action.payload.index, 1);
      return {
        ...state,
        positions
      };
    }
    case ADD_DEGREE: {
      const degrees = state.degrees.slice(0);
      degrees.push(action.payload.entry);
      return {
        ...state,
        degrees
      };
    }
    case UPDATE_DEGREE: {
      const degrees = state.degrees.slice(0);
      degrees[action.payload.index] = action.payload.entry;
      return {
        ...state,
        degrees
      };
    }
    case REMOVE_DEGREE: {
      const degrees = state.degrees.slice(0);
      degrees.splice(action.payload.index, 1);
      return {
        ...state,
        degrees
      };
    }
    case ADD_SKILL: {
      const skills = state.skills.slice(0);
      skills.push(action.payload.skill);
      return {
        ...state,
        skills
      };
    }
    case UPDATE_SKILL: {
      const skills = state.skills.slice(0);
      skills[action.payload.index] = action.payload.skill;
      return {
        ...state,
        skills
      };
    }
    case REMOVE_SKILL: {
      const skills = state.skills.slice(0);
      skills.splice(action.payload.index, 1);
      return {
        ...state,
        skills
      };
    }
  }
};

export const ResumeProvider = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(resumeReducer, {
    name: '',
    username: '',
    headline: '',
    summary: '',
    phone: '',
    email: '',
    website: '',
    social: [
      {
        site: 'Linkedin',
        username: ''
      },
      {
        site: 'Dribbble',
        username: ''
      },
      {
        site: 'Github',
        username: ''
      }
    ],
    positions: [],
    degrees: [],
    skills: [],
    published: false,
    loading: false
  });

  return (
    <ResumeStateContext.Provider value={state}>
      <ResumeDispatchContext.Provider value={dispatch}>
        {children}
      </ResumeDispatchContext.Provider>
    </ResumeStateContext.Provider>
  );
};

export const useResumeState = () => {
  const context = useContext(ResumeStateContext);
  return context;
};

export const useResumeDispatch = () => {
  const context = useContext(ResumeDispatchContext);
  return context;
};
