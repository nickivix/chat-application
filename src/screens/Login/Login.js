import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

export default function Login(props) {
  let history = useHistory();

  const handleClick = () => {
    props.changeLoginStatus();
    history.push("/");
  };

  return (
    <LoginForm>
      <div>Email</div>
      <Input placeholder="Input email" class="input" />
      <div>Password</div>
      <Input placeholder="Input password" class="input" />
      <LoginButtonContainer>
        <Button title="Login" onClick={handleClick} />
      </LoginButtonContainer>
    </LoginForm>
  );
}

const LoginForm = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 30%;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
