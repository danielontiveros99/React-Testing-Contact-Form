import React from "react";
import ContactForm from './components/ContactForm'
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);

});

test('renders Contact form without crashing',  () => {
  render(<ContactForm />)
})

test("Testing Input Forms" , async () => {

  render(<ContactForm />)

    //testing first name
    const name = screen.queryByLabelText(/First Name/i)
    
    fireEvent.change(name, {target: {value:"Daniel"}})
    expect(name).toHaveValue("Daniel")

    //testing last name
    const lastName = screen.getByLabelText(/Last Name/i)
    // console.log(lastName)
    fireEvent.change(lastName, {target: {value:"Ontiveros"}})
    expect(lastName).toHaveValue("Ontiveros")

    //testing email input
    const emailInput= screen.getByPlaceholderText(/@/i)
    fireEvent.change(emailInput, {target: {value:"daniel@email.com"}})
    expect(emailInput).toHaveValue('daniel@email.com')

    //testing message input
    const messageInput= screen.getByRole(/textbox/i)
    // console.log(messageInput)
    fireEvent.change(messageInput, {target: {value:"Hello World!"}})
    expect(messageInput).toHaveValue('Hello World!')

    //testing the submit area / button
    const submit = screen.getByTestId(/submit/i)
    fireEvent.click(submit)
})