import React, { useRef } from 'react';
import UserMedia from './UserMedia';

const CAPTURE_OPTIONS = {
  audio: false,
  video: true,
};

const Video = () => {
  const videoRef = useRef();
  const mediaStream = UserMedia(CAPTURE_OPTIONS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  const handleCanPlay = () => {
    videoRef.current.play();
  };

  return (
    <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
  );
};

export default Video;
