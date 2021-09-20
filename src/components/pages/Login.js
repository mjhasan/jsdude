import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import style from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  const history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setError(false);
      setLoading(true);
      await login(email, password)
      history.push('/')
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to login!");
    }

  }

  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <Form
          onSubmit={handleSubmit}
          className={`${style.login}`}>
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            icon="lock" />

          <Button type="submit">
            <span>Submit Now</span>
          </Button>
          
          {error && <p className="error">{error}</p>}

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
