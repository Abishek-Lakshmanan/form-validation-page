import React from 'react';
import useForm from '../hooks/useForm';
import validate from '../utils/validate';

const FormSignup = () => {
  const {
    handleChange,
    values: { username, email, password, password2 },
    handleSubmit,
    errors,
  } = useForm(validate);

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Get Started with us today! Create your account</h1>
        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            id='username'
            type='text'
            name='username'
            className='form-input'
            placeholder='Enter your name'
            value={username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='Enter your email'
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
            value={password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password2' className='form-label'>
            Confirm Password
          </label>
          <input
            id='password2'
            type='password'
            name='password2'
            className='form-input'
            placeholder='Enter your Confirm Password'
            value={password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn'>Sign Up</button>
        <span className='form-input-login'>
          Already have an account Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
