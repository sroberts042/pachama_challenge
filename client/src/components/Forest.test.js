import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Forest from './Forest';

test('renders learn react link', () => {
  render(<MemoryRouter><Forest/></MemoryRouter>);
});
