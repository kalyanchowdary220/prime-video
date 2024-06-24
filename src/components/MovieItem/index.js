// Write your code here

import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt=" thumbnail" className="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="model-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />.
            </button>
            <div className="react-player-card">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
