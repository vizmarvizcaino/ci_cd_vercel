import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';

test('renders footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Creado por Vizmar Vizcaino/i);
  expect(linkElement).toBeInTheDocument();
});
