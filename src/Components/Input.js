import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { Form, InputGroup } from "react-bootstrap";

const Input = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = () => {
    if (input) {
      setTodos([
        ...todos,
        {
          text: input,
          completed: false,
        },
      ]);
    }
    setInput("");
  };
  return (
    <div>
      <InputGroup>
        <Form.Control type='text' onChange={inputHandler} value={input} />
        {/* <InputGroup.Text id='basic-addon1'> */}
        <InputGroup.Text onClick={submitHandler}>
          <BsPlus />
        </InputGroup.Text>
        {/* </InputGroup.Text> */}
      </InputGroup>
    </div>
  );
};

export default Input;
