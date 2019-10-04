import React from 'react';
import ReactDOM from 'react-dom';

import App from 'src/components/App';

window.location.hash = '';

/*
       (Landing or Home)
       / 

       (Resume)
       /:username

       (Update)
       /experience
       /education
       /skills

       (Settings)
       /settings
 */

import './style.sass';

ReactDOM.render(<App />, document.getElementById('root'));
