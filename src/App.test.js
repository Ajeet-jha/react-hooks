import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Learn React Hooks', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React Hooks/i);
  expect(linkElement).toBeInTheDocument();
});
