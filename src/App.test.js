import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  //const linkElement2 = screen.findAllByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

afterEach(cleanup);

test('the result should be 0', () => {
    const { getByTestId } = render(<App />); 
    expect(getByTestId('counter')).toHaveTextContent(0)
});

