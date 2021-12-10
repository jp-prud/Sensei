import React from 'react';

import ContactForm from '../../../components/ContactForm';

export default function NewUser() {
  return (
    <>
      <ContactForm context={{
        title: 'Get started',
        subtitle: 'Start creating the best possible user experience for you customers',
      }}
      />
    </>
  );
}
