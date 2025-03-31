import { render, screen, fireEvent } from '@testing-library/react';
import { Formtwo } from './Components/Reservations';
import { MemoryRouter } from "react-router-dom";

describe ("button disables when input field is empty or values are invalid" ,() => {
  test('ensure users input values are valid before form submits', () => {
    const handleResForm = jest.fn();
    render( <MemoryRouter>
              <Formtwo />
            </MemoryRouter>
          );


    const emailInput = screen.getByLabelText(/Email/);
    fireEvent.change(emailInput, {target: {value : 'khay@g.com'}});

    const subButton = screen.getByText("Submit Details");
    fireEvent.click(subButton);


    expect(handleResForm).not.toHaveBeenCalled();
    expect(subButton).toHaveAttribute("disabled");
  });

});

