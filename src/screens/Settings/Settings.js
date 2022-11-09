import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import Button from "components/Button/Button";

export default function Settings(props) {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div>
      <header>
        <ButtonContainer>
          <Button title="Back" onClick={handleClick} />
        </ButtonContainer>
      </header>
      <Container>
        <Avatar>
          {props.username.firstname[0]
            ? props.username.firstname[0].toUpperCase()
            : null}
          {props.username.lastname[0]
            ? props.username.lastname[0].toUpperCase()
            : null}
        </Avatar>
        <InfoContainer>
          <InfoInput
            value={props.username.firstname}
            onChange={props.changeFirstname}
          />
          <InfoInput
            value={props.username.lastname}
            onChange={props.changeLastname}
          />
        </InfoContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  height: 200px;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
  width: 100px;
  height: 100px;
  background-color: #00a2ed;

  font-size: 45px;
  font-weight: 900;
  color: white;

  border-radius: 50%;
`;

const InfoContainer = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: row;

  width: 100%;
`;

const InfoInput = styled.input`
  flex: 0.5;
  margin-right: 20px;
  font-size: 35px;
  border: 0;
  border-bottom: 1px solid black;

  :focus {
    outline: none;
    border-bottom: 2px solid #00a2ed;
  }
`;

const ButtonContainer = styled.div`
  margin: 15px 0 0 15px;
`;
