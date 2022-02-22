import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ForestCard from './ForestCard';

test('renders learn react link', () => {
  render(<MemoryRouter><ForestCard/></MemoryRouter>);
});
