import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import EditSongForm from './EditSongForm';

// imports Card and Buttons from React Bootstrap, imports EditSongForm to edit songs after adding them. 

// Adds song, deletesong and updates songs
function SongCard({ song, deleteSong, updateSong }) {
  const [isEditing, setIsEditing] = useState(false);

  //toggles button options for editing or updating. 
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  //card styled and pulls in editing for EditSongForm to Card Body.. adds song, Album and Band. Buttons available to edit or delete. 
  // toggle on Click.
  return (
    <Card style={{ width: '18rem' }}>
      {isEditing ? (
        <EditSongForm song={song} updateSong={updateSong} toggleEdit={toggleEdit} />
      ) : (
        <Card.Body>
          <Card.Title>{song.title}</Card.Title>
          <Card.Text>
            {song.body}
            <br />
            <strong>Album:</strong> {song.album}
            <br />
            <strong>Band:</strong> {song.band}
          </Card.Text>
          <Button variant="danger" onClick={() => deleteSong(song.id)}>Delete</Button>
          <Button variant="primary" onClick={toggleEdit}>Edit</Button>
        </Card.Body>
      )}
    </Card>
  );
}

export default SongCard;
