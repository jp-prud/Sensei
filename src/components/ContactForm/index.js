import React from 'react';

import { Form, FormHeader, FormBody } from './styled';

import FormGroup from '../FormGroup';

import Input from '../input';
import Label from '../label';

export default function ContactForm({ context }) {
  return (
    <Form>
      <FormHeader>
        <h1>
          {context.title}
        </h1>

        <p>
          {context.subtitle}
        </p>
      </FormHeader>

      <FormBody>
        <FormGroup>
          <Label>Name</Label>
          <Input placeholder="Enter your name" typex="text" />
        </FormGroup>
      </FormBody>
    </Form>
  );
}
