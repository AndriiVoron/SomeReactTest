import React, { Component } from 'react';

import Header from '../components/header';
import Loader from '../components/loader';
import ErrorMessage from '../components/error';
import ImageSingle from '../components/imageSingle';

import './containersStyle.css'

class SinglePicturePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageId: Number(this.props.data.match.params.id),
    }
  }
  

  render() {
    let content = null;
    let currentImage = {};
    const data = this.props.data;
    data.imagesArr.forEach(image => {
      if(this.state.imageId === image.id) {
        currentImage = {...image};
        return;
      }
    });
    
    if (data.areLoading) {
      content = (
        <Loader />
      );
    }
    if (currentImage) {
        content = (
          <ImageSingle image={currentImage}/>
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
          <div className="imageWrp">
              { content }
          </div>
        </main>
      </div>
    );
  }
} 

export default SinglePicturePage;
