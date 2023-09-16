import { FC } from 'react';
import { Form } from './Form';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <Form />
    </div>
  );
};
