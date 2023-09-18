import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test('should show two inputs and a button', () => { 
    render(<UserForm />)

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
 })

 test('should call onUserAdd when the form is submitted',  () => { 

    const mock = jest.fn();

    render(<UserForm onUserAdd={mock}/>)

    const nameInput = screen.getByRole('textbox',{
        name: /name/i
    })

    const emailInput = screen.getByRole('textbox',{
        name: /email/i
    })
    const button = screen.getByRole('button')

     user.click(nameInput)
     user.keyboard('ankit')

     user.click(emailInput)
     user.keyboard('ankit@gmail.com')

     user.click(button)

    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({name:'ankit', email:'ankit@gmail.com'})
})