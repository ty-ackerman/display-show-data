import React from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
import styled from "styled-components";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

const LoaderStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  color: white;
  h3 {
    margin-bottom: 20px;
  }
`;

const ContainerStyled = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loader() {
  return (
    <LoaderStyled>
      <h3>Loading episodes...</h3>
      <BarLoader
        css={override}
        width="300px"
        height="5px"
        loading={true}
        color="#fff"
      />
    </LoaderStyled>
  );
}

export function SmallLoader() {
  return (
    <ContainerStyled>
      <BarLoader css={override} width="300px" height="5px" loading={true} />
    </ContainerStyled>
  );
}
