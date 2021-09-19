import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Search = ({ searchInput, setSearchInput }) => {
  const searchHandler = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div>
      <InputGroup>
        <InputGroup.Text id='basic-addon1'>
          <BsSearch />
        </InputGroup.Text>
        <Form.Control
          type='text'
          placeholder='Search'
          onChange={searchHandler}
          value={searchInput}
        />
      </InputGroup>
    </div>
  );
};

export default Search;
