import React from 'react';
import SongDetails from './SongDetails';

const SongsList = ({data}) => {
  const songItems = data.map((song) => {
      return (
        <SongDetails song={song} key={song.id}/>
      );
    });
    return (
      <div className='song-list'>
        <ul>
          {songItems}
        </ul>
      </div>
    );
  }

export default SongsList;
