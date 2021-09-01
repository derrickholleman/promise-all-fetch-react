import React from 'react'

const Movies = ({movie}) => {
    return (
        <div>
            {movie.title} {movie.original_title}
        </div>
    )
}

export default Movies
