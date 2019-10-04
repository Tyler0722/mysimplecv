import React from 'react';

import AppProviders from './AppProviders';
import AppGlobalStyles from './AppGlobalStyles';
import AppRoutes from './AppRoutes';

const App = (props) => {
  return (
    <AppProviders>
      <AppGlobalStyles />
      <AppRoutes />
    </AppProviders>
  );
};

export default App;
