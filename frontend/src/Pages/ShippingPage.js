import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ShippingPage() {
  return (
    <div>
      <Helmet>
        <title>ShippingPage</title>
      </Helmet>
      <h1 className='my-3'>Shipping address</h1>
    </div>
  );
}
