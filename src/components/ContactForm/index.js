import React from 'react';

import { Form, FormHeader, FormBody } from './styled';

import FormGroup from '../FormGroup';

import Input from '../input';
import Label from '../label';
import Select from '../select';
import Button from '../button';

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

        <FormGroup>
          <Label>Email</Label>
          <Input placeholder="Enter your mail" typex="mail" />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input placeholder="Enter your password" typex="password" />
        </FormGroup>

        <FormGroup>
          <Label>Phone</Label>
          <Input placeholder="Enter your phone" typex="phone" />
        </FormGroup>

        <FormGroup>
          <Label>Company</Label>
          <Select>
            <option value="1"> Modular </option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Button> Connect </Button>
        </FormGroup>
      </FormBody>
    </Form>
  );
}
