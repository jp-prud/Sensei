import React, { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';

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
  const [errors, setErrors] = useState([]);

  const handleChangeName = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'O nome é obrigatório' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExist = errors.find((error) => error.field === 'email');

      if (errorAlreadyExist) {
        return;
      }

      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'E-mail inválido' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'email',
      ));
    }
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'password', message: 'A senha é obrigatória' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'password',
      ));
    }
  };

  const getMessageErrorByFieldName = (fieldName) => errors.find(
    (error) => error.field === fieldName,
  )?.message;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
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
            placeholder="Enter your name"
            type="text"
            onChange={(handleChangeName)}
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
            type="mail"
            onChange={handleChangeEmail}
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
            onChange={handleChangePassword}
            value={password}
            error={getMessageErrorByFieldName('password')}
          />
        </FormGroup>

        <FormGroup>
          <Label>Phone</Label>
          <Input
            placeholder="Enter your phone"
            type="phone"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
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
          <Button>
            {context.button}
          </Button>
        </FormGroup>
      </FormBody>
    </Form>
  );
}
