import React from 'react';
import Content from '../content/Content';
import './home.scss';
import HomeImg from '../../assets/homeImg.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="homeImage">
        <img src={HomeImg} alt="home-image" className="img" />
        <h1>
          Pilih Fakultas serta Program Studi pada Menu untuk melihat Podcast
        </h1>
      </div>
    </div>
  );
};

export default Home;
