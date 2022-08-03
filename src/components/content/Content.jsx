import React from 'react';
import './content.scss';
import { SidebarData } from '../SidebarData/SidebarData';

const Content = () => {
  return (
    <div className="content">
      <div className="content_">
        <h1>video</h1>
        <iframe
          className="iframe"
          width="1035"
          height="550"
          src={`https://www.youtube.com/embed/`}
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
