import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

`;

export const Image= styled.img`
  max-width:100%
`

export const Header = styled.header`
  font-size:1.5rem;
  color: darkgreen;
  text-align:center;
  margin:1em 0;
  text-transform:uppercase

`

export const NavBar = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const NavItem = styled.div`
  margin-right: 1em;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const CredentialFormContainer= styled.div`
  max-width: 25rem;
`;

export const CenteredBlock= styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
`

export const FormFields = styled.div`
  display:flex;
  flex-wrap: wrap;

`

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const InputWrapper = styled.div`
  width: 50%;
`

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  box-sizing:border-box;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const Select = styled.select`
width: 100%;
height: 42px;
outline: none;
border: 1px solid rgba(200, 200, 200, 0.3);
padding: 0px 10px;
border-bottom: 1.4px solid transparent;
transition: all 200ms ease-in-out;
font-size: 12px;
&::placeholder {
  color: rgba(200, 200, 200, 1);
}
&:not(:last-of-type) {
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}
&:focus {
  outline: none;
  border-bottom: 2px solid rgb(241, 196, 15);
}
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;
