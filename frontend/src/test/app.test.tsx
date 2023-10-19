/* eslint-env jest */
import { render, screen,  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App'; 

test('renders select and upload buttons', () => {
  render(<App />);
  const selectButton = screen.getByText('Select CSV File');
  const uploadButton = screen.getByText('Upload File');
  expect(selectButton).toBeTruthy();
  expect(uploadButton).toBeTruthy();
});

// test('renders search bar', () => {
//   render(<App />);
//   const searchBar = screen.getByPlaceholderText('Search for data');
//   expect(searchBar).toBeInTheDocument();
// });

// test('updates displayed cards on search', () => {
//   render(<App />);
//   const searchBar = screen.getByPlaceholderText('Search for data');
//   const card = screen.getByText('Card Content'); // Ajusta según tu estructura de componentes

//   fireEvent.change(searchBar, { target: { value: 'Search Query' } });

//   expect(card).toBeInTheDocument();
// });

// test('displays CSV data as cards', () => {
//   render(<App />);
//   const card = screen.getByText('Card Content'); // Ajusta según tu estructura de componentes
//   expect(card).toBeInTheDocument();
// });