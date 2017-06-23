import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return(
      <div className="photo-grid">
        <div className="photo-grid">
          {this.props.posts.map((post, i) => <Photo {...
            this.prps} key={i} i={i} post={post} />)}
        </div>
      </div>
    )
  }
});

export default PhotoGrid;
