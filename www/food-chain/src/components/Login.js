import { Form, Button } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { axiosInstance } from './../axios/config';
import { useNavigate } from 'react-router-dom';
import styleFlag from '../../src/assets/css/icons.css';
import userService from '../UserService';

const Login = (props) => {
  const emailValue = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  };

  const checkData = (e) => {
    e.preventDefault();
    axiosInstance
      .post('/api/login', {
        email: emailValue.current.value,
        password: password.current.value,
      })
      .then((res) => {
        localStorage.token = res.data.token;
        localStorage.name = res.data.name;
        localStorage.isAdmin = true;
        userService.setLoggedStatus(true);
        redirect();
      })
      .catch((err) => {
        console.log(err);
        alert('there is an error in credintials!!');
      });
  };

  return (
    <div>
      <Form
        style={{ width: '35%', margin: '100px auto' }}
        onSubmit={checkData}
        action='post'
      >
        <h2>Sign In</h2>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label> Email address </Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            ref={emailValue}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' ref={password} />
        </Form.Group>

        <Button variant='primary' type='submit' className='w-100'>
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
