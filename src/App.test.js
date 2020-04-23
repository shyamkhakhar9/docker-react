import React from 'react';
import REACTDOM from 'react-dom';
import App from './App';

it('renders withour crashing', () => {
  const div = document.createElement('div');
  React.render.render(<App />, div);
  React.render.unmountComponentAtNode(div);
});
