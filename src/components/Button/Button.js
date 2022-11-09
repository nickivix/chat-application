import React from "react";

import styled from "styled-components";

export default function Button(props) {
  return (
    <CustomButton type="button" onClick={props.onClick}>
      {props.title}
    </CustomButton>
  );
}

const CustomButton = styled.button`
  background-color: #00a2ed;
  border: 0px;
  border-radius: 5px;

  height: 25px;

  font-weight: 600;
  color: white;

  :hover {
    cursor: pointer;
  }
`;
