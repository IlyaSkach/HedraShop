import React from 'react';
import './HeroVideo.scss';
import video from './video.mp4';

const HeroVideo = () => (
  <section className="hero-video">
    <video src={video} autoPlay loop muted></video>
  </section>
);

export default HeroVideo;