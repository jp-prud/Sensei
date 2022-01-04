import React, { useState } from 'react';

import { Form, FormHeader, FormBody } from './styled';

import FormGroup from '../FormGroup';

import Input from '../Input';
import Label from '../Label';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ context }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
          <Input
            placeholder="Enter your name"
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </FormGroup>

        <FormGroup error="Email format is not allowed">
          <Label>Email</Label>
          <Input
            placeholder="Enter your mail"
            type="mail"
            error
            onChange={(event) => setEmail(event.target.target)}
            value={email}
          />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input placeholder="Enter your password" type="password" />
        </FormGroup>

        <FormGroup>
          <Label>Phone</Label>
          <Input placeholder="Enter your phone" type="phone" />
        </FormGroup>

        <FormGroup>
          <Label>Company</Label>
          <Select>
            <option value="1" selected> Modular </option>
            <option value="2"> Modular 2 </option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Button>
            {context.button}
          </Button>
        </FormGroup>
      </FormBody>
    </Form>
  );
}
