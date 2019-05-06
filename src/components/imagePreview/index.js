import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class ImagePreview extends Component {
  render() {
    return (
      <li className='imageItem'>
        <Link
          className='imageLink'
          to = {{
            pathname: `/single/${this.props.image.id}`
          }}
        >
          <figure className='imageThumbnail'>
            <img src={this.props.image.thumbnailUrl} alt={ this.props.image.title } />
            <figcaption>
              { this.props.image.title }
            </figcaption>
          </figure>
        </Link>
      </li>
    );
  }
}

export default ImagePreview;