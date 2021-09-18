import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  const history = useHistory()

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agree, setAgree] = useState(false)

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const { signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Password does not matched!")
    }

    try {
      setError(false);
      setLoading(true);
      await signUp(email, password, displayName)
      history.push('/')
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <Form onSubmit={handleSubmit} className={`${classes.signup}`}>
          <TextInput type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter name"
            icon="person" />

          <TextInput
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            icon="lock" />

          <TextInput
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox
            text="I agree to the Terms &amp; Conditions"
            onChange={(e) => setAgree(e.target.value)}
          />

          <Button disabled={!agree} type="submit">
            <span>Submit Now</span>
          </Button>

          {error && <p className="error">{error}</p>}

          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
