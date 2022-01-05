import React from 'react';

import UserForm from '../../../components/UserForm';

export default function EditAdmin() {
  return (
    <>
      <UserForm
        context={{
          title: 'Edit User',
          subtitle: 'Update your informations',
          button: 'Update',
        }}
      />
    </>
  );
}
