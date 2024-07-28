'use client';
import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

interface VideoPlayerProps {
  videoSrc: string;
  poster: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = new Plyr(videoRef.current!, {
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen',
      ],
      settings: ['captions', 'quality', 'speed', 'loop'],
    });

    // Cleanup on component unmount
    return () => player.destroy();
  }, []);

  return (
    <video
      ref={videoRef}
      playsInline
      controls
      data-poster={poster}
      width="100%"
      style={{
        borderRadius: '16px',
      }}
    >
      <source src={videoSrc} type="video/mp4" />
      {/* Add additional sources or tracks if needed */}
    </video>
  );
};

export default VideoPlayer;
