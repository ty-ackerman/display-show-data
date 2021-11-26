import React from "react";
import { connect } from "react-redux";
import { relativePercToColor } from "../utils/colors";
import styled from "styled-components";
// import * as actionCreators from '../store/actions/index';

const EpisodeStyled = styled.div.attrs((props) => ({
  imDbRating: props.imDbRating,
  stats: props.stats,
}))`
  //   margin: 2px;
  padding: 2px 5px;
  background-color: ${(props) =>
    props.imDbRating
      ? relativePercToColor(props.imDbRating, props.stats.min, props.stats.max)
      : "lightgrey"};
  font-size: 12px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  .episodeTitle {
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
  }

  filter: grayscale(40%);

  .rating {
    font-weight: bold;
  }
`;

// For selecting max + min:
//     ${(props) =>
//     parseFloat(props.imDbRating) === props.stats.max &&
//     `border: 1px solid black;`};
//   ${(props) =>
//     parseFloat(props.imDbRating) === props.stats.min &&
//     `border: 1px solid blue;`};

function Episode(props) {
  const { imDbRating, title, episodeNumber } = props.episode;

  return (
    <EpisodeStyled imDbRating={imDbRating} stats={props.stats}>
      <div className="episodeTitle">{title}</div>
      <div className="rating">{imDbRating}</div>
    </EpisodeStyled>
  );
}

const mapStateToProps = (state) => ({
  stats: state.stats,
});

export default connect(mapStateToProps)(Episode);
