import React from 'react';
import REACTDOm from 'react-dom';
import App from './App';

it('renders withour crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
