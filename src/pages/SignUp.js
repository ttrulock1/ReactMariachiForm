import { useState } from "react";
import { CenteredBlock, CredentialFormContainer } from "../components/common";
import PagedForm from "../components/PagedForm";
import TextInput from "../components/TextInput";

export default function SignUp({ onSubmit }) {
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
          width={1}
        />,
        <TextInput
          type="password"
          label="Password"
          required
          value={password}
          onChange={setPassword}
          width={1}

        />,
        <TextInput
          type="password"
          label="Confirm Password"
          required
          value={checkPassword}
          onChange={setCheckPassword}
          width={1}

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
    return onSubmit({ email, password })
  }

  return <CenteredBlock><CredentialFormContainer><PagedForm pages={pages} onSubmit={handleSubmit} /></CredentialFormContainer></CenteredBlock> ;
}
