import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    // TODO 1.2: wrapper className must be EXACT
    <div className="mb-4">
      <InputGroup>
        <InputGroup.Text>Search</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}