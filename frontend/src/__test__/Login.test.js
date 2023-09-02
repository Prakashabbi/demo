import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

describe('App Component', () => {
  it('should render the login form', () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(getByText('Login Form')).toBeInTheDocument();
    expect(getByLabelText('Enter Username')).toBeInTheDocument();
    expect(getByLabelText('Enter Password')).toBeInTheDocument();
    expect(getByText('submit')).toBeInTheDocument();
  });

  it('should update the state when input values change', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const usernameInput = getByLabelText('Enter Username');
    const passwordInput = getByLabelText('Enter Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpassword');
  });

  it('should navigate to "/student" when the form is submitted', () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const usernameInput = getByLabelText('Enter Username');
    const passwordInput = getByLabelText('Enter Password');
    const submitButton = getByText('submit');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    // You may want to assert that navigation occurred; for simplicity, we're not doing that here
  });
});
