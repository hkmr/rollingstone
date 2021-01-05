import './App.css';
import React, { Component } from 'react';
import AlbumCard from './components/albumCard';
import Loader from './components/loader';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {albums : [], isLoading: true};
  }
  
  componentDidMount(){
    this.fetchAlbums();
  }

  fetchAlbums(){
    fetch('https://api.spotify.com/v1/artists/22bE4uQ6baNwSHPVcDxLCe/albums', {
      method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat('BQATjBjFLz4pklNKk5gRW_uzgSTnYgAJooq75j9IPcRTUzQQml38sQb_f1qgwytxKAsNzVj13JRgY4MSzn4vk3aKSlGnul6bwa3cdlvN4BdmbmSmwHM8z3cbPuyjOd8J2igQhIrTlO8lWf0TsS3y-qbot0LmxBsrTGSF') 
      }
    }).then((response) => {
      if(response.status === 200){
        response.json().then(
          (data) => {
            this.setState({
              albums : data.items,
              isLoading: false
            })
          }
        )
      }
    })
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>The Rolling Stone's Albums</h1>
          <div className="row row-cols-2">
          {
            this.state.isLoading ? <Loader/> : this.state.albums.map(function(album) {
              return (
                <div className="col mt-4" key={album.id}>
                  <AlbumCard name={album.name} image={album.images[1].url} type={album.album_type}
                                release_date={album.release_date} markets={album.available_markets} total_tracks={album.total_tracks}
                                url={album.external_urls.spotify} artist={album.artists[0].name} 
                                artist_url={album.artists[0].external_urls.spotify} />
                </div>
              );
            })
          }
          </div>
        </div>
      </div>
    )
  }
}


// Build by harsh kumar