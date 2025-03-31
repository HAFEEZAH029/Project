// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

// Global mock for react-router-dom
jest.mock("react-router-dom", () => {
    const actual = jest.requireActual("react-router-dom");
    return {
      ...actual,
      NavLink: (props) => <div {...props}>MockNavLink</div>,
      Link: (props) => <div {...props}>MockLink</div>,
    };
  });
