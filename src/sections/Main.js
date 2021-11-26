import React, { useEffect } from "react";
import SearchResults from "../components/SearchResults";
import { connect } from "react-redux";

import * as actionCreators from "../store/actions/index";
import MainSearch from "../components/MainSearch";
import Loader, { SmallLoader } from "../components/Loader";
import NoResults from "../components/NoResults";

function Main(props) {
  // useEffect(() => {
  //   props.setLoading(props.results.length === 0);
  // }, [props.results]);

  const renderResults = () => {
    if (
      props.results.length === 0 &&
      props.search.length &&
      !props.loading.isLoading
    )
      return <NoResults />;
    else if (
      props.search.length &&
      props.loading.isLoading &&
      !props.loading.fullScreen
    )
      return <SmallLoader />;
    else if (props.search.length)
      return <SearchResults results={props.results} />;
  };

  return (
    <div className="section">
      <MainSearch />
      {renderResults()}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
