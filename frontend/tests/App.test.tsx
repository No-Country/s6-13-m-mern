import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { describe, test } from '@jest/globals';
import React from 'react';

describe('Pruebas en <App />', () => {
  test('should ', () => {
    render(<App />);
    screen.debug();
  });
});
