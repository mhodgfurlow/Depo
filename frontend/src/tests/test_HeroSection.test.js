import { render, screen } from '@testing-library/react';
import HeroSection from '../components/HeroSection';

test('renders Hero section', () => {
  render(<HeroSection />);
  const linkElement = screen.getByText(/Welcome to Depo!/i);
  expect(linkElement).toBeInTheDocument();
});
