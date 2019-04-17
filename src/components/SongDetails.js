import React from 'react';

const SongDetails = (props) => {
  return (
    <div>
      <li>
      <h4>Song name:{props.song['im:name'].label}</h4>
      <p>Artist:{props.song['im:artist'].label}</p>
      <img src={props.song['im:image'][0].label}></img>
      </li>
    </div>
  )
}

export default SongDetails;
