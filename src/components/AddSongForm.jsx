import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// adding a song to the form using the function below. Puts the data into useState. Then can adjust title, body, album or band.
// Title is song name, body is the Song Comments. 

function AddSongForm({ addSong }) {
  const [song, setSong] = useState({ title: '', body: '', album: '', band: '' });

  // function to handle the changes. 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({ ...song, [name]: value });
  };

  //function to handle the submit button and pass throug the array.
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
    setSong({ title: '', body: '', album: '', band: '' });
  };

  // returns the content to the Form. 
  // Uses Label to identify the form update fields. 

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Song Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={song.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Song Comments</Form.Label>
        <Form.Control
          type="text"
          name="body"
          value={song.body}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Album Name</Form.Label>
        <Form.Control
          type="text"
          name="album"
          value={song.album}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Band Name</Form.Label>
        <Form.Control
          type="text"
          name="band"
          value={song.band}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Song
      </Button>
    </Form>
  );
}

// once button submitted, changes are handled by the onChange option. 

export default AddSongForm;
