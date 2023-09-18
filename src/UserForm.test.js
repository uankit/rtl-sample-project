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
    const argList = []
    const callback = (...args) => {
        argList.push(args)
    }
    render(<UserForm onUserAdd={callback}/>)

    const [nameInput, emailInput] = screen.getAllByRole('textbox');
    const button = screen.getByRole('button')

     user.click(nameInput)
     user.keyboard('ankit')

     user.click(emailInput)
     user.keyboard('ankit@gmail.com')

     user.click(button)

    expect(argList).toHaveLength(1)
    expect(argList[0][0]).toEqual({name:'ankit', email:'ankit@gmail.com'})
  })