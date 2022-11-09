import React, { useContext } from "react";
import { Context } from "components/Context/Context";

import styled from "styled-components";
import Input from "components/Input/Input";
import { Link } from "react-router-dom";

export default function CreateChatModal(props) {
  const { channelName, changeChannelName } = useContext(Context);

  const handleChange = (event) => {
    changeChannelName(event.target.value);
  };

  return (
    <ModalContainer>
      <ModalTitle>New channel</ModalTitle>
      <Input
        placeholder="Channel title"
        value={channelName}
        onChange={handleChange}
      />
      <Input placeholder="Channel description" />
      <CreateButtonContainer>
        <StyledLink
          to={`/channel/${
            channelName
              ? channelName.replace(/\s+/g, "-").toLowerCase()
              : "unnamed-channel"
          }`}
        >
          Create
        </StyledLink>
      </CreateButtonContainer>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 30px;

  width: 30%;
  border: 1px solid black;
  border-radius: 10px;
`;

const ModalTitle = styled.div`
  margin-bottom: 15px;
  font-weight: 600;
`;

const CreateButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  background-color: #00a2ed;
  border: 0px;
  border-radius: 5px;

  height: 25px;
  padding: 5px;

  font-weight: 600;
  color: white;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;
