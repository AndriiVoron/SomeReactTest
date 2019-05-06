import React, { Component } from 'react';
import { connect } from 'react-redux';
import { imagesFetchData } from '../actions/images.action';

import AlbumPage from '../pages/AlbumPage';

class AlbumContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumId: Number(this.props.match.params.id),
    }
  }
  
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <AlbumPage data = {this.props}/>
    );
  }
} 

const mapStateToProps = store => {
  return {
    albumsArr: store.images.albumsArr,
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
)(AlbumContainer);
