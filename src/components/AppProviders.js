import React from 'react';

import { ResumeProvider } from 'src/components/context/ResumeContext';

const AppProvider = (props) => {
  const { children } = props;
  return <ResumeProvider>{children}</ResumeProvider>;
};

export default AppProvider;
