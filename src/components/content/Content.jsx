import React from 'react';
import './content.scss';

const Content = ({ title, link }) => {
  return (
    <div className="content">
      <div className="content_">
        <h1>{title}</h1>
        <iframe
          className="iframe"
          src={`https://www.youtube.com/embed/${link}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default Content;
