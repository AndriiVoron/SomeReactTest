import React, { Component } from 'react';

import Header from '../components/header';
import Loader from '../components/loader';
import ErrorMessage from '../components/error';
import ImagePreview from '../components/imagePreview';

import './containersStyle.css'

class AlbumPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumId: Number(this.props.data.match.params.id),
    }
  }

  render() {
    let content = null;
    let currentAlbum = [];
    const data = this.props.data;
    data.imagesArr.forEach(image => {
      if(this.state.albumId === image.albumId) {
        currentAlbum.push(image);
      }
    });
    
    if (data.areLoading) {
      content = (
        <Loader />
      );
    }
    if (currentAlbum) {
        content = (
          currentAlbum.map((image) =>
            <ImagePreview key={ image.id } image={image}/>
          )
        );
    }
    if (data.haveError) {
      content = (
        <ErrorMessage />
      );
    }

    return (
      <div>
        <Header />
        <main>
          <div className="albumsWrp">
              { content }
          </div>
        </main>
      </div>
    );
  }
} 

export default AlbumPage;
