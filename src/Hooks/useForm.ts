import { ChangeEvent, useState } from 'react';

export function useForm(initialState, nputErrorState) {
  const [inputField, setInputField] = useState(initialState);
  const [inputErrors, setInputErrorrs] = useState(nputErrorState);
  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputField({ ...inputField, [name]: value });
  };
  const handleOnBlurChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!value) {
      setInputErrorrs({ ...inputErrors, [name]: `Enter ${name}` });
    } else {
      setInputErrorrs({ ...inputErrors, [name]: '' });
    }
  };
  return [
    inputField,
    handleChangeForm,
    setInputField,
    inputErrors,
    handleOnBlurChangeForm,
  ];
}
