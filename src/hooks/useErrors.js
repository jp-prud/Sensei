import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function appendNewError({ field, message }) {
    const errorAlreadyExist = errors.find((error) => error.field === 'email');

    if (errorAlreadyExist) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeErrors(fieldName) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  function getMessageErrorByFieldName(fieldName) {
    return errors.find(
      (error) => error.field === fieldName,
    )?.message;
  }

  return {
    errors,
    appendNewError,
    removeErrors,
    getMessageErrorByFieldName,
  };
}
