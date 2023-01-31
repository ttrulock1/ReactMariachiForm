import { useState } from "react";
import { Link } from "react-router-dom";
import { BoxContainer, CenteredBlock, CredentialFormContainer } from "../components/common";
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
          width={1}
        />,
        <TextInput
          type="password"
          label="Password"
          required
          value={password}
          onChange={setPassword}
          width= {1}
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

  return <CenteredBlock><CredentialFormContainer>
  <PagedForm pages={pages} onSubmit={handleSubmit} />
  <Link to="/register">Register For an Account</Link>
  </CredentialFormContainer></CenteredBlock>
   ;
}
