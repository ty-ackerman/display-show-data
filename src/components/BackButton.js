import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

// need to restyle obviously...
const StyledButton = styled.div`
  padding: 5px 10px;
  border: 1px solid black;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 20px;
`;

function BackButton(props) {
  const handleClick = () => {
    props.history.push("/");
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>Back</StyledButton>
    </div>
  );
}

export default withRouter(BackButton);
