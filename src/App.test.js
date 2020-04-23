import React from 'react';
import REACTDOM from 'react-dom';
import App from './App';

it('renders withour crashing', () => {
  const div = document.createElement('div');
  React.render(<App />, div);
  React.unmountComponentAtNode(div);
});
