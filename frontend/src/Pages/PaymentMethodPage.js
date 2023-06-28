import React from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';

export default function PaymentMethodPage() {

  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>payment method</title>
        </Helmet>
        <h1 className="my-3">Payment method</h1>
        <Form onSubmit={submitHandler}></Form>
      </div>
    </div>
  );
}
