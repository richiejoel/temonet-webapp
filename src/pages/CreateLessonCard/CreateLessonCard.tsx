import React, { useState, useCallback } from "react";
import { connect, useSelector } from "react-redux";
import Draggable from "react-draggable";
import { useDropzone } from "react-dropzone";

import NoImage from "../../assets/svg/no-image.svg";

import "./CreateLessonCard.scss";
import "../../styles/theme.scss";

function CreateLessonCard() {
  const theme_global = useSelector((state: any) => state.theme_global);
  const [activeDrags, setActiveDrags] = useState(0);
  const [albumImage, setAlbumImage] = useState("");
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setFile(file);
    setAlbumImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop,
  });

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };

  return (
    <div className={`create-lesson-card ${theme_global.theme}`}>
      <h2>Hii</h2>
      <Draggable {...dragHandlers}>
        <div className="box">
          <div
            {...getRootProps()}
            className="avatar"
            style={{ backgroundImage: `url('${albumImage}')` }}
          />
          <input {...getInputProps()} />
          {!albumImage && <img id="image-drag-svg" src={NoImage} />}
        </div>
      </Draggable>
    </div>
  );
}

export default connect()(CreateLessonCard);
