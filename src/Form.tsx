import { useState } from 'react';
import { Table } from '../Table';
import { useForm } from './Hooks/useForm';

export interface FormProps {
  name: string;
  age: number;
  location: string;
  username: string;
}

const initialState = {
  name: '',
  age: null,
  location: '',
  username: '',
};

const initialErrorState = {
  name: '',
  age: '',
  location: '',
  username: '',
};

export function Form() {
  const [
    inputField,
    handleChangeForm,
    setInputField,
    inputErrors,
    handleOnBlurChangeForm,
  ] = useForm(initialState, initialErrorState);

  const [showData, setShowData] = useState<FormProps[]>([]);

  const handleAddForm = () => {
    setShowData([...showData, inputField]);
    setInputField(initialState);
  };
  return (
    <div className="form">
      <label>name</label>
      <input
        name="name"
        value={inputField.name}
        onChange={handleChangeForm}
        onBlur={handleOnBlurChangeForm}
      />
      <span className="error">{inputErrors.name}</span>
      <label>age</label>
      <input
        name="age"
        value={inputField.age}
        onChange={handleChangeForm}
        onBlur={handleOnBlurChangeForm}
      />
      <span className="error">{inputErrors.age}</span>

      <label>loacation</label>
      <input
        name="location"
        value={inputField.location}
        onChange={handleChangeForm}
        onBlur={handleOnBlurChangeForm}
      />
      <span className="error">{inputErrors.location}</span>

      <label>username</label>
      <input
        name="username"
        value={inputField.username}
        onChange={handleChangeForm}
        onBlur={handleOnBlurChangeForm}
      />
      <span className="error">{inputErrors.username}</span>

      <input
        onClick={handleAddForm}
        type="button"
        value="Add Table"
        disabled={
          inputField.name === '' ||
          inputField.age === 0 ||
          inputField.location === '' ||
          inputField.username === ''
        }
      />
      <div>
        <span>Users List</span>
        {showData.map((res: FormProps) => {
          return (
            <div key={res.name} className="displayData">
              <span>name : {res.name}</span>
              <span> age : {res.age}</span>
              <span>location : {res.location}</span>
              <span>username : {res.username}</span>
            </div>
          );
        })}
      </div>
      <Table tables={showData} />
    </div>
  );
}
