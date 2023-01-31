import { useState } from "react";
import PagedForm from "../components/PagedForm";
import TextInput from "../components/TextInput";

export default function SignUp({onSubmit}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
 
  const [passwordError, setPasswordError] = useState("");

  const pages = [
    {
      elements: [
        <TextInput
          type="email"
          label="Email"
          required
          value={email}
          onChange={setEmail}
        />,
        <TextInput
          type="password"
          label="Password"
          required
          value={password}
          onChange={setPassword}
        />,
        <TextInput
          type="password"
          label="Confirm Password"
          required
          value={checkPassword}
          onChange={setCheckPassword}
        />,
        passwordError && <div>{passwordError}</div>
      ],
      validate: () => {
        setPasswordError("");
        if (password !== checkPassword) {
          setPasswordError("Passwords must match!");
          return false;
        }

        return true;
      }
    },
  ];

  async function handleSubmit() {
    return onSubmit({email, password})
  }

  return <PagedForm pages={pages} onSubmit={handleSubmit} />;
}
