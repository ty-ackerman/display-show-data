import React from "react";
import Episode from "./Episode";
import styled from "styled-components";
import { connect } from "react-redux";

const SeasonStyled = styled.div.attrs((props) => ({ show: props.show }))`
  width: calc(100% / ${(props) => props.show.seasons.length});
  max-width: 400px;
`;

const SeasonTitleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Season(props) {
  const { seasonNum, season, show } = props;

  return (
    <SeasonStyled show={show}>
      <SeasonTitleStyled>{seasonNum + 1}</SeasonTitleStyled>
      {season.map((episode) => {
        return <Episode episode={episode} key={episode.id} />;
      })}
    </SeasonStyled>
  );
}

const mapStateToProps = (state) => ({
  show: state.show,
});

export default connect(mapStateToProps)(Season);
