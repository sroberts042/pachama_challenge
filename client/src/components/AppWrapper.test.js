import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppWrapper from './AppWrapper';

test('renders wrapper', () => {
  render(<AppWrapper title="test" />);
  expect(screen.getByText('test')).toBeInTheDocument()
});
