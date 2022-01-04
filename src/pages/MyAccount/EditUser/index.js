import React from 'react';

import ContactForm from '../../../components/ContactForm';

export default function EditAdmin() {
  return (
    <>
      <ContactForm
        context={{
          title: 'Edit User',
          subtitle: 'Update your informations',
          button: 'Update',
        }}
      />
    </>
  );
}
