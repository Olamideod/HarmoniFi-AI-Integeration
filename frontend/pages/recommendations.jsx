import React, { useState } from 'react';
import axios from 'axios';

function Recommendations() {
  const [song, setSong] = useState('');
  const [recommendations, setRecommendations] = useState({ songs: [], posters: [] });

  const handleSongChange = (event) => {
    setSong(event.target.value);
  };

  const handleRecommend = async () => {
    try {
      const response = await axios.get('http://localhost:5000/recommendations', { params: { song } });
      console.log(response.data); // Add this line to log the response data
      setRecommendations(response.data); // Update state with response data
    } catch (error) {
      console.error('Failed to fetch recommendations:', error);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1em' }}>
      <h1 style={{ color: 'white' }}>Discover New Music with HarmoniFi</h1>
      <input 
        type="text" 
        value={song} 
        onChange={handleSongChange} 
        placeholder="Enter a song" 
        style={{ padding: '0.5em', width: '100%', marginBottom: '1em', color: 'black' }}
      />
      <button 
        onClick={handleRecommend} 
        style={{ padding: '0.5em 1em', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer', marginBottom: '1em' }}
      >
        Show Recommendations
      </button>
      <h2>Recommended Songs</h2>
      <select style={{ width: '100%', padding: '0.5em', marginBottom: '1em', color: 'black' }}>
        {recommendations.songs.map((song, index) => (
          <option key={index} value={song}>{song}</option>
        ))}
      </select>
      {recommendations.posters.map((poster, index) => (
        <img key={index} src={poster} alt={`Poster for ${recommendations.songs[index]}`} style={{ width: '100%', maxWidth: '300px', marginBottom: '1em' }} />
      ))}
    </div>
  );
}

export default Recommendations;