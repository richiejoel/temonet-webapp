import React, { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import ReactPlayer from "react-player";
import { Icon, Progress } from "semantic-ui-react";

import "./VideoPreview.scss";
import NoImage from "../../assets/svg/no-video.svg";

function VidepPreview(props) {
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

  const useClick = () => {
    if (estado === "show-img") {
    } else {
    }
  };

  const thumbs: JSX.Element = files.map((file) => (
    <div className={`thumb-video`} key={file.name}>
      <div className={`thumbInner-video`}>
        <ReactPlayer
          ref={player}
          url={file.preview}
          className="img-video"
          playing={playing}
          onSeek={(e) => console.log("onSeek", e)}
          onProgress={(e) => onProgress(e)}
          loop={true}
        />
        {/*<Progress
          progress="value"
          value={playedSeconds}
          total={totalSeconds}
          size="tiny"
        />*/}
        <input
          className="seek-player"
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
            className="pause-video"
            name="pause circle outline"
          />
        ) : (
          <Icon
            onClick={onStart}
            className="play-video"
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
