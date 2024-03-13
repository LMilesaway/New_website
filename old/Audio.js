import React, { useState, useRef, useEffect } from 'react';
import './LandingPage.css'; // Import your CSS file here

function Audio() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  useEffect(() => {
    // Set the initial volume to 0
    audioRef.current.volume = 0;

    // Gradually increase the volume over 3 minutes
    const duration = 3 * 60 * 2000; // 3 minutes in milliseconds
    const startTime = Date.now();

    const increaseVolume = () => {
      const currentTime = Date.now() - startTime;
      const targetVolume = Math.min(1, currentTime / duration);
      audioRef.current.volume = targetVolume;

      if (currentTime < duration) {
        requestAnimationFrame(increaseVolume);
      }
    };

    // Start increasing the volume
    increaseVolume();

    // Attach event listener to the document for clicks
    const handleClick = () => {
      // Check if the audio is already playing
      if (audioRef.current.paused) {
        // If not playing, start playback
        audioRef.current.play();
      }
    };

    document.addEventListener('click', handleClick);

    // Clean up when the component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    // Set the mute state when the component mounts
    audioRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <div className="audio-container">
      <audio ref={audioRef} controls={false} autoPlay>
        <source src="/audio/La-femme.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handleToggleMute} className="Mutebtn">
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
}

export default Audio;
