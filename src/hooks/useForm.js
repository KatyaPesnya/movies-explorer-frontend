import { useState, useCallback } from "react";

export function useFormSerch() {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      setValues({...values, [name]: value});
  };

  return {values, handleChange, setValues};
}
  export function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    resetForm,
    errors,
    isValid,
  };
}

