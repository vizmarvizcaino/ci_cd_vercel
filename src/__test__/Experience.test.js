import { render, screen } from '@testing-library/react';
import Experience from '../components/experience/Experience';

test('renders footer', () => {
  render(<Experience />);
  const linkElement = screen.getByText(/Frontend Development/i);
  expect(linkElement).toBeInTheDocument();
});
