import { render, screen, fireEvent } from '@testing-library/react';
import { Formtwo } from './Components/Reservations';
import { MemoryRouter } from "react-router-dom";

describe ("button disables when input field is empty or values are invalid" ,() => {
  test('disables button when email input is empty or invalid', () => {
    const handleResForm = jest.fn();
    render( <MemoryRouter>
              <Formtwo />
            </MemoryRouter>
          );

    const subButton = screen.getByText("Submit Details");
    const emailInput = screen.getByLabelText(/Email/);

    fireEvent.change(emailInput, {target: {value : 'khay@g.com'}});
    fireEvent.click(subButton);
    expect(handleResForm).not.toHaveBeenCalled();

    fireEvent.change(emailInput, {target: {value : '  '}});
    fireEvent.click(subButton);
    expect(handleResForm).not.toHaveBeenCalled();

    fireEvent.change(emailInput, {target: {value : 'khafeezah2000@gmail.com'}});
    fireEvent.click(subButton);
    expect(handleResForm).toHaveBeenCalled();
  });

});


