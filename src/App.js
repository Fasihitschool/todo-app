import { useState, useEffect } from "react";
import Input from "./Components/Input";
import Todo from "./Components/Todo";
import Search from "./Components/Search";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    let filter = [...todos];
    filter = filter.filter((el) => {
      let item = el.text.toLowerCase();
      return item.includes(searchInput.toLowerCase());
    });
    setFilteredTodos([...filter]);
  }, [todos, searchInput]);
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100px",
        height: "100px",
        color: "whitesmoke",
      }}
      className='App mx-auto bg-dark text-white'
      style={{ maxWidth: "800px" }}>
      <h1 className='text-center m-5'>Todo App</h1>
      <Container className='bg-dark text-white'>
        <Row className='mb-5'>
          <Col xs={6} className='text-right'>
            <Input todos={todos} setTodos={setTodos} />
          </Col>
          <Col xs={6} className='text-left'>
            <Search searchInput={searchInput} setSearchInput={setSearchInput} />
          </Col>
        </Row>
        <ListGroup>
          {filteredTodos.map((item, index) => (
            <ListGroup.Item>
              <Todo
                item={item}
                key={index}
                todos={todos}
                index={index}
                setTodos={setTodos}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

export default App;
