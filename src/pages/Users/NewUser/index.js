import React from 'react';

import UserForm from '../../../components/UserForm';

export default function NewUser() {
  return (
    <>
      <UserForm context={{
        title: 'Crie um novo usuário para o sistema',
        subtitle: 'lorem ipsum d',
        button: 'Adicionar',
      }}
      />
    </>
  );
}
