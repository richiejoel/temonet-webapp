import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ReactPlayer from "react-player";

import "./VideoPreview.scss";
import NoImage from "../../assets/svg/no-video.svg";

function VidepPreview(props) {
  var global;
  const [files, setFiles] = useState<any>([]);
  const [estado, setEstado] = useState("show-img");
  const { getRootProps, getInputProps } = useDropzone({
    accept: "video/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      setEstado("hide-img");
    },
  });

  const useClick = () => {
    if (estado === "show-img") {
    } else {
    }
  };

  const thumbs: JSX.Element = files.map((file) => (
    <div className={`thumb-video`} key={file.name}>
      <div className={`thumbInner-video`}>
        <ReactPlayer url={file.preview} className="img-video" playing={true} />
        {/*<video src={file.preview} className={`img`} />*/}
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className="container-video">
      {estado === "show-img" ? (
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <img id={estado} className="img-drop-video" src={NoImage} />
          {!thumbs ? (
            <img className="img-drop-video" src={NoImage} />
          ) : (
            <div className={`thumbsContainer-video`}>{thumbs}</div>
          )}
        </div>
      ) : (
        <div
          {...getRootProps({
            className: "dropzone",
            onClick: (event) => event.stopPropagation(),
          })}
        >
          <input {...getInputProps()} />
          <img id={estado} className="img-drop-video" src={NoImage} />
          {!thumbs ? (
            <img className="img-drop-video" src={NoImage} />
          ) : (
            <div className={`thumbsContainer-video`}>{thumbs}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default VidepPreview;
