// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionCategoryFilter = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )

  const comedyCategoryFilter = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovie,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="movie-list-container">
        <h1 className="action-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionCategoryFilter} />
        <h1 className="action-heading">comedy Movies</h1>
        <MoviesSlider moviesList={comedyCategoryFilter} />
      </div>
    </div>
  )
}

export default PrimeVideo
