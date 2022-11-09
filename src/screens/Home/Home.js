import React, { useState } from "react";
import styled from "styled-components";

import Button from "components/Button/Button";
import Modal from "components/CreateChatModal/CreateChatModal";

export default function Home() {
  const [modalOpened, setModalOpened] = useState(false);

  const handleClick = () => {
    setModalOpened(!modalOpened);
  };

  return (
    <div>
      <header>
        <ButtonContainer>
          <Button title="Create a channel" onClick={handleClick} />
        </ButtonContainer>
      </header>
      <TextContainer>Welcome to Awesome chat</TextContainer>
      {modalOpened ? <Modal /> : null}
    </div>
  );
}

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  margin: 15px 0 0 15px;
`;
