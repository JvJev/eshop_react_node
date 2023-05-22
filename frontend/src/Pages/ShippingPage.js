import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';

export default function ShippingPage() {
  const [fullName, setFullName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Helmet>
        <title>ShippingPage</title>
      </Helmet>
      <h1 className="my-3">Shipping address</h1>
      <Form onsubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}
