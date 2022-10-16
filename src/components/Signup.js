import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { signup } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userAuth) => {
        // Mengirimkan informasi pengguna kedalam state redux
        dispatch(
          // userAuth.user berisi detail pengguna
          signup({
            email: userAuth.user.registerEmail,
            password: userAuth.user.registerPassword,
          })
        );
        navigate("/home");
        console.log(userAuth);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Container className="mt-5">
      <h1>Signup</h1>
      <Form>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            placeholder="Email"
            type="email"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            placeholder="Password"
            type="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button onClick={handleSubmit} className="mt-3 btn-success">
        Signup
      </Button>
    </Container>
  );
};

export default Signup;
