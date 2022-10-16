import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginToApp = (e) => {
    e.preventDefault();

    // signin menggunakan firebase
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      // userAuth.user berisi semua detail pengguna
      .then((userAuth) => {
        //menyimpan informasi pengguna ke state redux
        dispatch(
          login({
            email: userAuth.user.loginEmail,
            password: userAuth.user.loginPassword,
          })
        );
        navigate("/home");
        console.log(auth);
      })
      // display the error if any
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <Container className="mt-5">
        <h1>Login</h1>
        <Form>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Email"
              type="email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Password"
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button onClick={loginToApp} className="mt-3 btn-success">
          Login
        </Button>
      </Container>
    </div>
  );
};

export default Login;
