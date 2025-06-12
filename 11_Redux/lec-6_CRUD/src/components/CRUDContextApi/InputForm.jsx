import React from 'react';
import { useContext } from 'react';
import { FormContext } from './Context/Context';

const InputForm = () => {
  const { msg, user, handleSubmit, handleChange } = useContext(FormContext)
  return (
    <>

      <div>
        <h2> CURD Using Context API</h2>
        <h4 style={{ color: "red", textTransform: 'capitalize' }}>{msg}</h4>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange} /><br /><br />
          <input type="email" placeholder='Email' name='email' value={user.email} onChange={handleChange} /><br /><br />
          <input type="text" placeholder='phone' name='phone' value={user.phone} onChange={handleChange} /><br /><br />
          <input type="password" placeholder='password' name='password' value={user.password} onChange={handleChange} /><br /><br />
          <button type='submit'>{user.id ? 'Update' : 'Save '}</button>
        </form>
      </div>
    </>
  );
}

export default InputForm;
