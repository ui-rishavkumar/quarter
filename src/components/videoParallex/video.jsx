import React from "react";
import { FaPlay } from "react-icons/fa";
import "./video.css";
import video from "./image/video.jpg";
import ReactImageVideoLightbox from "react-image-video-lightbox";
const ParallexVideo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const data = [
    {
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
      type: "video",
      altTag: "some video",
    },
  ];
  return (
    <>
      <div className="video-section">
        <div
          className="video--parallex"
          style={{ backgroundImage: `url(${video})` }}
        >
          <div onClick={() => handleToggle()} className="video--play videoPlay pulse1">
            <FaPlay/>
            </div>
            {isOpen ? (
              <ReactImageVideoLightbox
                data={data}
                startIndex={0}
                showResourceCount={true}
                onCloseCallback={() => handleToggle()}
              />
            ) : null}
         
        </div>
      </div>
    </>
  );
};
export default ParallexVideo;
