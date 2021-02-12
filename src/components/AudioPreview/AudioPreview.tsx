import React, { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import ReactPlayer from "react-player";
import { Icon } from "semantic-ui-react";

import "./AudioPreview.scss";
import NoImage from "../../assets/svg/no-audio.svg";

function AudioPreview(props) {
  var global;
  const [files, setFiles] = useState<any>([]);
  const [estado, setEstado] = useState("show-img");
  const [playing, setPlaying] = useState<boolean>(true);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<any>(true);
  const player = useRef<ReactPlayer>(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "audio/*",
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

  const onStart = () => {
    setPlaying(true);
  };

  const onPause = () => {
    setPlaying(false);
  };

  const onProgress = (data) => {
    console.log(`Harr `);
    console.log(data);
    setPlayedSeconds(data.playedSeconds);
    setTotalSeconds(data.loadedSeconds);
    setSeeking(data);
    setPlayed(data.played);
  };

  const handleSeekMouseDown = (e) => {
    setSeeking(true);
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
    console.log(`Harry`);
  };

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    player?.current?.seekTo(parseFloat(e.target.value))!;
  };

  const thumbs: JSX.Element = files.map((file) => (
    <div className={`thumb-audio`} key={file.name}>
      <div className={`thumbInner-audio`}>
        <ReactPlayer
          ref={player}
          url={file.preview}
          className="img-audio"
          playing={playing}
          onSeek={(e) => console.log("onSeek", e)}
          onProgress={(e) => onProgress(e)}
          loop={true}
        />
        <input
          className="seek-player-audio"
          type="range"
          min={0}
          max={0.999999}
          step="any"
          value={played}
          onMouseDown={handleSeekMouseDown}
          onChange={(e) => {
            handleSeekChange(e);
          }}
          onMouseUp={handleSeekMouseUp}
        />
        {playing ? (
          <Icon
            onClick={onPause}
            className="pause-audio"
            name="pause circle outline"
          />
        ) : (
          <Icon
            onClick={onStart}
            className="play-audio"
            name="play circle outline"
          />
        )}
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
    <div className="container-audio">
      {estado === "show-img" ? (
        <div {...getRootProps({ className: "dropzone-audio" })}>
          <input {...getInputProps()} />
          <img id={estado} className="img-drop-audio" src={NoImage} />
          {thumbs && (
            <div className="s">
              <img className="img-drop-audio-fix" src={NoImage} />
              <div className={`thumbsContainer-audio`}>{thumbs}</div>
            </div>
          )}
        </div>
      ) : (
        <div
          {...getRootProps({
            className: "dropzone-audio",
            onClick: (event) => event.stopPropagation(),
          })}
        >
          <input {...getInputProps()} />
          <img id={estado} className="img-drop-audio" src={NoImage} />
          {thumbs && (
            <div>
              <img className="img-drop-audio-fix" src={NoImage} />

              <div className={`thumbsContainer-audio`}>{thumbs}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AudioPreview;
