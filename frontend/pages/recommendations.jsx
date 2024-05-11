import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recommendations() {
  const [selectedSong, setSelectedSong] = useState('');
  const [recommendations, setRecommendations] = useState({ songs: [], posters: [] });
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    // Fetch all songs when the component mounts
    fetchAllSongs();
  }, []); // Fetch all songs only once when the component mounts

  const fetchAllSongs = async () => {
    try {
      // Fetch all songs from the backend
      const response = await axios.get('http://localhost:5000/all_songs');
      setAllSongs(response.data.songs);
    } catch (error) {
      console.error('Failed to fetch all songs:', error);
    }
  };

  const handleSongChange = (event) => {
    setSelectedSong(event.target.value);
  };

  const handleRecommend = async () => {
    try {
      const response = await axios.get('http://localhost:5000/recommendations', { params: { song: selectedSong } });
      console.log(response.data); // Add this line to log the response data
      setRecommendations(response.data); // Update state with response data
    } catch (error) {
      console.error('Failed to fetch recommendations:', error);
    }
  };

  return (
    <div>
      {recommendations.map((recommendation, index) => (
        <p key={index}>{recommendation.title}</p>
      ))}
    </div>
  );
}

export default Recommendations;
