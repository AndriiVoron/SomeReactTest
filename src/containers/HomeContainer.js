import React, { Component } from 'react';
import { connect } from 'react-redux';
import { imagesFetchData } from '../actions/images.action';

import HomePage from '../pages/HomePage';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <HomePage data={this.props} />
    );
  }
} 

const mapStateToProps = store => {
  return {
    albumsArr: store.images.albumsArr,
    areLoading: store.images.imagesAreLoading,
    haveError: store.images.imagesHaveError,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(imagesFetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
