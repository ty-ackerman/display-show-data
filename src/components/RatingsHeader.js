import React from "react";
import Statistics from "./Statistics";
import { connect } from "react-redux";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`;

function RatingsHeader(props) {
  const { show } = props;
  return (
    <HeaderStyled>
      <div className="left">
        <h1>{show.title}</h1>
        <h4>{`Last Updated: ${new Date(show.lastUpdated).toDateString()}`}</h4>
      </div>
      <div className="right">
        <Statistics />
      </div>
    </HeaderStyled>
  );
}

const mapStateToProps = (state) => ({
  show: state.show,
  loading: state.loading,
});

export default connect(mapStateToProps)(RatingsHeader);
