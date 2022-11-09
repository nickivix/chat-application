import React, { useState } from "react";
import styled from "styled-components";
import { List, CellMeasurer, CellMeasurerCache } from "react-virtualized";
import { useHistory } from "react-router-dom";
import phrases from "mocks/phrases.json";

import Button from "components/Button/Button";

export default function Channel(props) {
  let history = useHistory();

  const logout = () => {
    props.changeLoginStatus();
    props.changeMessages([]);
    props.changeChannelName("");
    history.push("/login");
  };

  const messages = props.messages;
  const [inputValue, setInputValue] = useState("");

  const cache = new CellMeasurerCache({
    fixedWidth: true,
  });

  const handleClick = () => {
    history.push("/settings");
  };

  const sendMessage = () => {
    if (inputValue) {
      let messagesList = messages;
      messagesList.push({
        messageSender: "user",
        message: inputValue,
      });
      props.changeMessages(messagesList);
      setInputValue("");
      receiveMessage();
    }
  };

  const receiveMessage = () => {
    let messagesList = messages;
    messagesList.push({
      messageSender: "friend",
      message:
        phrases.friendPhrases[
          Math.floor(Math.random() * phrases.friendPhrases.length)
        ],
    });
    setTimeout(props.changeMessages(messagesList), 2000);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const rowRenderer = ({ index, key, parent, style }) => {
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        {messages[index].messageSender === "user" ? (
          <UserMessageContainer key={index} style={style}>
            <NameWrapper>
              {props.username.firstname} {props.username.lastname}
            </NameWrapper>
            <ContentWrapper>{messages[index].message}</ContentWrapper>
          </UserMessageContainer>
        ) : (
          <FriendMessageContainer key={index} style={style}>
            <NameWrapper>Friend</NameWrapper>
            <ContentWrapper>{messages[index].message}</ContentWrapper>
          </FriendMessageContainer>
        )}
      </CellMeasurer>
    );
  };

  return (
    <ChatContainer>
      <Header>
        <TitleContainer>
          {props.channelName ? props.channelName : "Unnamed channel"}
        </TitleContainer>
        <ButtonsContainer>
          <Button title="Settings" onClick={handleClick}></Button>
          <Button title="Logout" onClick={logout}></Button>
        </ButtonsContainer>
      </Header>
      <StyledList
        height={500}
        rowCount={messages.length}
        rowHeight={cache.rowHeight}
        rowRenderer={rowRenderer}
        width={500}
        scrollToIndex={messages.length - 1}
      />

      <InputContainer>
        <MessageInput value={inputValue} onChange={handleChange} />
        <SubmitButton onClick={sendMessage}>Send</SubmitButton>
      </InputContainer>
    </ChatContainer>
  );
}

const StyledList = styled(List)`
  border: 1px solid black;
`;

const UserMessageContainer = styled.div`
  border-radius: 10px;
`;

const FriendMessageContainer = styled.div`
  border-radius: 10px;
  background-color: #00a2ed;
  color: white;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  margin-top: 20px;
  border-radius: 10px;
`;

const MessageInput = styled.input`
  flex: 0.85;
  border: 1px solid black;
  border-radius: 6px 0 0 6px;
  padding-left: 10px;
  font-size: 20px;
`;

const SubmitButton = styled.button`
  height: 40px;
  border: 1px solid black;
  border-left: 0;
  border-radius: 0px 6px 6px 0;
  background-color: white;
  flex: 0.15;

  font-size: 20px;
  font-weight: 600;

  :focus {
    cursor: pointer;
  }
`;

const ChatContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const NameWrapper = styled.div`
  font-size: 14px;
  padding: 5px 0 0 5px;
`;

const ContentWrapper = styled.div`
  font-size: 20px;
  padding: 5px 10px 10px 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0.7;
  height: 50px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 0.3;
  height: 50px;
`;
