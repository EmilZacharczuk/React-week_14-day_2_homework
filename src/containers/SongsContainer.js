import React, {Component} from 'react';
import SongsList from '../components/SongsList';

class SongsContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };

  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data.feed.entry})

    });

    request.send();
  }

  render() {
    return(
      <div className="songs-container">
      <h1>UK top 20 songs</h1>
      <SongsList data={this.state.songs}/>
      </div>
    )
  }
}

export default SongsContainer;
