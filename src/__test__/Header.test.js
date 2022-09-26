import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';

test('renders header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Fullstack Devoloper/i);
  expect(linkElement).toBeInTheDocument();
});
