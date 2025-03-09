import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
// handles all the Edits of the Song by ID and options to use..

function EditSongForm({ song, updateSong, toggleEdit }) {
  const [updatedSong, setUpdatedSong] = useState({ ...song });

  useEffect(() => {
    setUpdatedSong({ ...song });
  }, [song]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSong({ ...updatedSong, [name]: value });
  };
// song is updated, adds name and Value. 

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(song.id, updatedSong);
    toggleEdit();
  };
//returns the results of any updates or edits to the song ID data. 

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Song Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={updatedSong.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Song Body</Form.Label>
        <Form.Control
          type="text"
          name="body"
          value={updatedSong.body}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Album Name</Form.Label>
        <Form.Control
          type="text"
          name="album"
          value={updatedSong.album}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Band Name</Form.Label>
        <Form.Control
          type="text"
          name="band"
          value={updatedSong.band}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update Song
      </Button>
      <Button variant="secondary" onClick={toggleEdit}>
        Cancel
      </Button>
    </Form>
  );
}

//exports the EditSongForm for use in other pages. 

export default EditSongForm;
