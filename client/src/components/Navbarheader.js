import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const Navbarheader = () => {

  return (
  <div>
    <Form inline>
      <FormControl type="text" placeholder="Search" />
      <Button >Search</Button>
    </Form>
  </div>
  )
}

export default Navbarheader;