import React from "react";

import styled from "styled-components";

export default function Input(props) {
  return (
    <CustomInput
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

const CustomInput = styled.input`
  margin: 20px 0;

  width: 100%;
  height: 30px;

  border: 1px solid black;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`;
