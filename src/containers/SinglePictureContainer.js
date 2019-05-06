import React, { Component } from 'react';
import { connect } from 'react-redux';
import { imagesFetchData } from '../actions/images.action';

import SinglePicture from '../pages/SinglePicturePage';

class SinglePictureContainer extends Component {
 
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <SinglePicture data={this.props} />
    );
  }
} 

const mapStateToProps = store => {
  return {
    imagesArr: store.images.imagesArr,
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
)(SinglePictureContainer);
