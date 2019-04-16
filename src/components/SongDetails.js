import React from 'react';

const SongDetails = (props) => {
  return (
    <div>
      <h1>Song name:{props.song['im:name'].label}</h1>
      <p>Artist:{props.song['im:artist'].label}</p>
    </div>
  )
}

export default SongDetails
