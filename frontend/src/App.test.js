import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test('renders dashboard after login', async () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/Username/i), { target: { value: 'test' } });
  fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'test' } });
  fireEvent.click(screen.getByText(/Login/i));

  await new Promise((r) => setTimeout(r, 1000)); // Wait for login to complete

  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});

test('navigates to Real-Time Data page', async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Real-Time Data/i));

  expect(screen.getByText(/Real-Time Data Integration/i)).toBeInTheDocument();
});

test('navigates to Predictive Analytics page', async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Predictive Analytics/i));

  expect(screen.getByText(/Predictive Analytics/i)).toBeInTheDocument();
});

test('navigates to NLP Analysis page', async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/NLP Analysis/i));

  expect(screen.getByText(/NLP Analysis/i)).toBeInTheDocument();
});

test('navigates to Alert System page', async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Alert System/i));

  expect(screen.getByText(/Alert System/i)).toBeInTheDocument();
});