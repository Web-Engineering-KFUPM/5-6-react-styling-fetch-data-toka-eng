import React from "react";
import { Card, Button } from "react-bootstrap";

export default function UserCard({ user, onUserClick }) {
  return (
    <Card className="user-card">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>

        {/* TODO 3.1: ONE button, text EXACT */}
        <Button onClick={() => onUserClick(user)}>View Details</Button>
      </Card.Body>
    </Card>
  );
}