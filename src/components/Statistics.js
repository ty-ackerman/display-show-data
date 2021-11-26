import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StatisticsStyled = styled.div`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  background-color: #f3f3f3;
  margin-bottom: 20px;
  > * {
    margin: 5px;
  }
  h2 {
    margin-right: 10px;
  }
`;

function Statistics(props) {
  const { stats } = props;

  const round = (num, decimals = 1) => {
    const factor = parseInt(`1${"0".repeat(decimals)}`);
    return Math.floor(num * factor) / factor;
  };

  return (
    <StatisticsStyled>
      <h2>Statistics</h2>
      <div className="categories">
        <div className="average">{`Average Rating: ${round(
          stats.average,
          1
        )}`}</div>
        <div className="max">{`Highest Rating: ${stats.max}`}</div>
        <div className="min">{`Lowest Rating: ${stats.min}`}</div>

        <div className="variance">{`Variance: ${round(
          stats.variance,
          2
        )}`}</div>
        <div className="standardDev">{`Standard Deviation: ${round(
          stats.standardDev,
          2
        )}`}</div>
      </div>
    </StatisticsStyled>
  );
}

const mapStateToProps = (state) => ({
  stats: state.stats,
});

export default connect(mapStateToProps)(Statistics);
