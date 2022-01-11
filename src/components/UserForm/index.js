import React, { useState } from 'react';

import useErrors from '../../hooks/useErrors';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

import { Form, FormHeader, FormBody } from './styled';

import FormGroup from '../FormGroup';

import Input from '../Input';
import Label from '../Label';
import Select from '../Select';
import Button from '../Button';

export default function UserForm({ context }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  const {
    errors,
    appendNewError,
    removeErrors,
    getMessageErrorByFieldName,
  } = useErrors();

  const formIsValid = (name && errors.length === 0);

  const handleNameChange = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      appendNewError({ field: 'name', message: 'O nome é obrigatório' });
    } else {
      removeErrors('name');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      appendNewError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeErrors('email');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    if (!event.target.value) {
      appendNewError({ field: 'password', message: 'A senha é obrigatória' });
    } else {
      removeErrors('password');
    }
  };

  const handlePhoneChange = (event) => {
    const formatedPhone = formatPhone(event.target.value);
    setPhone(formatedPhone);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={() => handleSubmit} noValidate>
      <FormHeader>
        <h1>
          {context.title}
        </h1>

        <p>
          {context.subtitle}
        </p>
      </FormHeader>

      <FormBody>
        <FormGroup
          error={getMessageErrorByFieldName('name')}
        >
          <Label>Name</Label>
          <Input
            placeholder="Enter your name *"
            type="text"
            onChange={(handleNameChange)}
            value={name}
            error={getMessageErrorByFieldName('name')}
          />
        </FormGroup>

        <FormGroup
          error={getMessageErrorByFieldName('email')}
        >
          <Label>Email</Label>
          <Input
            placeholder="Enter your mail"
            type="email"
            onChange={handleEmailChange}
            value={email}
            error={getMessageErrorByFieldName('email')}
          />
        </FormGroup>

        <FormGroup
          error={getMessageErrorByFieldName('password')}
        >
          <Label>Password</Label>
          <Input
            placeholder="Enter your password"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            error={getMessageErrorByFieldName('password')}
          />
        </FormGroup>

        <FormGroup>
          <Label>Phone</Label>
          <Input
            placeholder="Enter your phone"
            type="phone"
            onChange={handlePhoneChange}
            value={phone}
            maxLength="15"
          />
        </FormGroup>

        <FormGroup>
          <Label>Company</Label>
          <Select
            onChange={(event) => setCompany(event.target.value)}
            value={company}
          >
            <option value="" defaultValue> Categoria </option>
            <option value="1"> Modular </option>
            <option value="2"> Modular 2 </option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Button
            disabled={!formIsValid}
          >
            {context.button}
          </Button>
        </FormGroup>
      </FormBody>
    </Form>
  );
}
