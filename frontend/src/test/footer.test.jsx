import { render } from '@testing-library/react';
import Footer from '../components/footer/Footer';

test('should render the "Contacto" link in the footer', () => {
  const { getByText } = render(<Footer />);

  const contactLink = getByText('Contacto');

  expect(contactLink).toBeInTheDocument();
  expect(contactLink).toHaveAttribute('href', '');
});