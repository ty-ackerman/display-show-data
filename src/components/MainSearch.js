import React, { useState } from "react";
import Title from "./Title";
import imdb from "../utils/imdb";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import styled from "styled-components";

import * as actionCreators from "../store/actions/index";

const StyledSection = styled.div`
  .MuiInput-underline:after,
  .MuiInput-underline:after {
    border-bottom: 2px solid black;
  }
  .Mui-focused.MuiFormLabel-root {
    color: black;
  }
  .MuiTextField-root {
    width: 300px;
  }
  margin-bottom: 70px;
`;

function MainSearch(props) {
  const [search, setSearch] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleChange = async (e) => await setSearch(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search.length) {
      setErrorText("Please enter a valid show title");
      return;
    } else if (props.search === search) return;
    else {
      props.setLoading(true);
      props.onSaveResults([]);
      setErrorText("");
      await props.onSaveSearch(search);
      const data = await imdb.getShow(search);
      props.onSaveResults(data);
      props.setLoading(false);
    }
  };

  return (
    <StyledSection>
      <Title title="TV Show Episode Ratings" subtitle="Data Visualization" />
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          onChange={handleChange}
          label="Search show title"
          autoComplete="off"
          error={errorText.length > 0}
          helperText={errorText}
          size="medium"
          defaultValue={props.search}
        />
      </form>
    </StyledSection>
  );
}

const mapStateToProps = (state) => ({
  results: state.results,
  search: state.search,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onSaveSearch: (search) => dispatch(actionCreators.storeSearch(search)),
  onSaveResults: (shows) => dispatch(actionCreators.storeSearchResults(shows)),
  setLoading: (isLoading) => dispatch(actionCreators.storeLoading(isLoading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);
