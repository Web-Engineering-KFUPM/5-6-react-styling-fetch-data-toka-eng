import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function UserModal({ show, user, onHide }) {
  if (!user) return null;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        {/* TODO 3.2: title EXACT */}
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* TODO 3.2: big avatar className EXACT */}
        <div className="user-avatar-large">{user.name.charAt(0)}</div>

        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
      </Modal.Body>

      <Modal.Footer>
        {/* TODO 3.2: ONE close button */}
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
