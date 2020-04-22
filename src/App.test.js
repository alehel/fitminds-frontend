import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Log in with Strava link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Log in with Strava/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders page title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/fitminds.run/i);
  expect(titleElement).toBeInTheDocument();
});
