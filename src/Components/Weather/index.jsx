import React from 'react'

const Weather = ({weather}) => {
    return (
        <div className='container'>
            In {weather.location.name}, {weather.location.region} it's currently {weather.current.temp_f} degrees outside
        </div>
    )
}

export default Weather
