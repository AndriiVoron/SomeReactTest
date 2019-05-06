import React, { Component } from 'react';

import Header from '../components/header';
import Loader from '../components/loader';
import ErrorMessage from '../components/error';
import AlbumPreview from '../components/albumPreview';

import './containersStyle.css'

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }
  

  render() {
    let content = null;
    const data = this.props.data;
    
    if (data.areLoading) {
      content = (
        <Loader />
      );
    }
    if (data.albumsArr) {
        content = (
          data.albumsArr.map((album) =>
            <AlbumPreview key={ album.id } album={album}/>
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
          <ul className="albumsWrp">
              { content }
          </ul>
        </main>
      </div>
    );
  }
} 

export default HomePage;
