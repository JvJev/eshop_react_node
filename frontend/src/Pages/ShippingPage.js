import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';

export default function ShippingPage() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

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
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="postalCode">
          <Form.Label>postalCode</Form.Label>
          <Form.Control
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
          <Form.Label>country</Form.Label>
          <Form.Control
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}
