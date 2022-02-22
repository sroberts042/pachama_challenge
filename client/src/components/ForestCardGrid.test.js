import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ForestCardGrid from './ForestCardGrid';

test('renders learn react link', () => {
  render(<MemoryRouter><ForestCardGrid/></MemoryRouter>);
});
