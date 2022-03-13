import { Form, Button } from "react-bootstrap";
import { useRef } from "react";

const Login = (props) => {
    const emailValue = useRef();
    const password = useRef();
    
    const checkData = (e) => {
        e.preventDefault()
        console.log(emailValue.current.value)
        console.log(password.current.value)
    }
  
  return (
    <Form  style={{ width: "35%" , margin:'100px auto'}} onSubmit={checkData}>
      <h2>Sign In</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={emailValue}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password}/>
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Sign In
      </Button>
    </Form>
  );
};

export default Login;
