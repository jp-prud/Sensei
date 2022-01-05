import React from 'react';

import UserForm from '../../../components/UserForm';

export default function NewUser() {
  return (
    <>
      <UserForm context={{
        title: 'Get started',
        subtitle: 'Start creating the best possible user experience for you customers',
        button: 'Sign up',
      }}
      />
    </>
  );
}
