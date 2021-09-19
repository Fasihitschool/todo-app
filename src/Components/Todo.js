import React from "react";
import { Button } from "react-bootstrap";
import { BsCheck, BsTrash, BsX } from "react-icons/bs";

const Todo = ({ item, index, todos, setTodos }) => {
  const completeHandler = () => {
    let newTodos = [...todos];
    newTodos.map((el, i) => {
      if (i === index) {
        newTodos[i].completed = !newTodos[i].completed;
      }
      return el;
    });
    setTodos([...newTodos]);
  };

  const deleteHandler = () => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((el, i) => i !== index);
    setTodos([...newTodos]);
  };
  let completed = item.completed;
  return (
    <div className='d-flex justify-content-between'>
      {console.log(completed)}
      {completed ? (
        <>
          <p style={{ textDecoration: "line-through" }}>{item.text}</p>
          <div>
            <Button
              onClick={completeHandler}
              variant='outline-warning'
              className='button'>
              <BsX />
            </Button>{" "}
            <Button onClick={deleteHandler} variant='outline-danger'>
              <BsTrash />
            </Button>{" "}
          </div>
        </>
      ) : (
        <>
          <p>{item.text}</p>
          <div>
            <Button
              onClick={completeHandler}
              variant='outline-success'
              className='button'>
              <BsCheck />
            </Button>{" "}
            <Button onClick={deleteHandler} variant='outline-danger'>
              <BsTrash />
            </Button>{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
