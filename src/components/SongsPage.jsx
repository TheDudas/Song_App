import { useState } from 'react';  //using State
import { Container, Row, Col } from 'react-bootstrap';
import SongCard from './SongCard';
import AddSongForm from './AddSongForm';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';  // Base URL for finding json place holder for website posts. 

function SongsPage() {
  const [songs, setSongs] = useState([]);
// this puts the songs and Songs into the use State 

//adding a song to the URL  and into string to retreive later

  const addSong = async (song) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(song),
    });
    const newSong = await response.json();
    setSongs([...songs, newSong]);
  };

// updating the song for editing purposes by ID. 
  const updateSong = async (id, updatedSong) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSong),
    });
    const updatedData = await response.json();
    setSongs(songs.map(song => (song.id === id ? updatedData : song)));
  };

  // deleting song and ID. 
  const deleteSong = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    setSongs(songs.filter(song => song.id !== id));
  };

  // returning the SongCard within the container to make it look good on the page. 
  // adds songs the song array and runs the function based on the function for each type of change
  // deleteSong, updateSong or addSong by id. Other data is connected via the ID. 
  return (
    <Container>
      <Row>
        {songs.map(song => (
          <Col key={song.id}>
            <SongCard song={song} deleteSong={deleteSong} updateSong={updateSong} />
          </Col>
        ))}
      </Row>
      <Row>
        <AddSongForm addSong={addSong} />
      </Row>
    </Container>
  );
}

export default SongsPage;
