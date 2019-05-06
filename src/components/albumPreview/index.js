import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class AlbumPreview extends Component {
  render() {
    return (
      <li className='albumItem'>
        <Link
          className='albumLink'
          to = {{
            pathname: `/album/${this.props.album.id}`
          }}
        >
          <h2 className='albumHeader'>{ this.props.album.title }</h2>
          <div className='albumThumbnail' style={{backgroundImage: 'url(' + this.props.album.thumbnailUrl + ')'}}></div>
        </Link>
      </li>
    );
  }
}

export default AlbumPreview;