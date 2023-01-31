import { useState } from "react";
import { Link } from "react-router-dom";
import { BoxContainer } from "../components/common";
import PagedForm from "../components/PagedForm";
import TextInput from "../components/TextInput";

export default function LogIn({onSubmit}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

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
       
      ],
      validate: () => {
    

        return true;
      }
    },
  ];

  async function handleSubmit() {
    return onSubmit({email, password})
  }

  return <BoxContainer> 
  <PagedForm pages={pages} onSubmit={handleSubmit} />
  <Link to="/register">Register For an Account</Link>
  </BoxContainer>;
}
