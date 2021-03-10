import React, { useState, useEffect, useRef, useCallback } from "react";
import { connect, useSelector } from "react-redux";
import AddCard from "../../assets/svg/add_note.svg";
import AddAudio from "../../assets/svg/no-audio.svg";
import Draggable from "react-draggable";
import AudioPreview from "../../components/AudioPreview";
import useLongPress from "../../hooks/useLongPress";
import "./PaletteAudioOptions.scss";
import "../../styles/theme.scss";

function PaletteAudioOptions(props): JSX.Element {
  const {
    item,
    items,
    updatePos,
    deleteNote,
    newitem,
    setItem,
    keyPress,
    itemTitle,
    itemsTitle,
    setItemTitle,
    newItemTitle,
    deleteNoteTitle,
    updatePosTitle,
    itemOption,
    itemsOptions,
    setItemOption,
    newItemOption,
    updatePosOption,
    deleteNoteOption,
    isDraggable,
  } = props;
  const theme_global_color = useSelector((state: any) => state.theme_global);
  const [content, setContent] = useState("");
  const [width, setWidth] = useState(0);
  const span = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState({ x: 600, y: 150 });
  const dragSize = useRef<any>(null);

  const handler = useCallback(() => {
    console.log(`Gola`);
    function onMouseMove(e: any) {
      setSize((currentSize) => ({
        x: currentSize.x + e.movementX,
        y: currentSize.y + e.movementY,
      }));
    }
    function onMouseUp() {
      dragSize?.current?.removeEventListener("mousemove", onMouseMove);
      dragSize?.current?.removeEventListener("mouseup", onMouseUp);
    }
    dragSize?.current?.addEventListener("mousemove", onMouseMove);
    dragSize?.current?.addEventListener("mouseup", onMouseUp);
  }, []);

  const fix = () => {
    setItem(`Lesson`);
    newitem();
  };
  const fixTitle = () => {
    setItemTitle(`Lesson Title`);
    newItemTitle();
  };

  const createOption = () => {
    setItemOption(`Option`);
    newItemOption();
  };

  useEffect(() => {
    if (span != null && span.current != null) {
      setWidth(span.current.offsetWidth + span.current.offsetWidth * 1.2);
      console.log(`Joel ${span.current.offsetWidth}`);
    }
  }, [content]);

  const changeHandler = (evt) => {
    setContent(evt.target.value);
  };

  const itemIndex = () => {};

  const onLongPress = () => {
    console.log("longpress is triggered");
    handler();
  };

  const onClick = () => {
    console.log("click is triggered");
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 50,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
  //{`${item.item}`}
  return (
    <div className={`palette-audio ${theme_global_color.theme}`}>
      <div className="palette-audio__content">
        <div className="palette-audio__left">
          <div
            className="notes"
            onClick={() => {
              fix();
            }}
          >
            <img id="img-add" src={AddAudio} alt="img-add" />
            <span>Añadir audio</span>
          </div>
          <div
            className="notes"
            onClick={() => {
              fixTitle();
            }}
          >
            <img id="img-add" src={AddCard} alt="img-add" />
            <span>Añadir texto</span>
          </div>
          <div
            className="notes"
            onClick={() => {
              createOption();
            }}
          >
            <img id="img-add" src={AddCard} alt="img-add" />
            <span>Añadir opciones</span>
          </div>
        </div>
        <div className="palette-audio__right">
          {/*<div className="palette-audio__right__colors"></div>
          <div className="palette-audio__right__colors"></div>
          <div className="palette-audio__right__colors"></div>
          <div className="palette-audio__right__colors"></div>
          <div className="palette-audio__right__colors"></div>
          <div className="palette-audio__right_colors"></div>
          <div className="palette-audio__right__colors"></div>
          <div className="palette-audio__right__colors"></div>*/}
        </div>

        <div>
          <div id="new-item">
            {/*<input
          value={item}
          onChange={(e) => setItem("Lesson")}
          placeholder="Enter something..."
          onKeyPress={(e) => keyPress(e)}
        />
        <button onClick={newitem}>ENTER</button>*/}
          </div>
          {items.map((item, index) => {
            return (
              <>
                <Draggable
                  key={item.id}
                  disabled={isDraggable}
                  defaultPosition={item.defaultPos}
                  onStop={(e, data) => {
                    updatePos(data, index);
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgb(249, 162, 144)',
                      /*width: size.x,
                      height: size.y,*/
                    }}
                    className="box-audio"
                  >
                    <div ref={dragSize} onMouseDown={handler}>
                      <input
                        id="input-card"
                        type="text"
                        onChange={(e) => setItem(e.target.value)}
                        placeholder="Title option..."
                      />
                      <button id="delete" onClick={(e) => deleteNote(item.id)}>
                        X
                      </button>
                      <AudioPreview />
                    </div>
                  </div>
                </Draggable>
              </>
            );
          })}

          {itemsTitle.map((itemTitle, index) => {
            return (
              <Draggable
                key={itemTitle.id}
                disabled={isDraggable}
                defaultPosition={itemTitle.defaultPosTitle}
                onStop={(e, data) => {
                  updatePosTitle(data, index);
                }}
              >
                <div className="texto">
                  <>
                    <span id="hide" ref={span}>
                      {content}
                    </span>
                    <input
                      id="input-title-text"
                      type="text"
                      autoFocus
                      style={{ width }}
                      placeholder="Title lesson..."
                      onChange={changeHandler}
                    />
                  </>
                  <button
                    id="delete-title"
                    onClick={(e) => deleteNoteTitle(itemTitle.id)}
                  >
                    X
                  </button>
                </div>
              </Draggable>
            );
          })}

          {/* Draggable options */}
          {itemsOptions.map((itemOption, index) => {
            return (
              <>
                <Draggable
                  key={itemOption.id}
                  disabled={isDraggable}
                  defaultPosition={itemOption.defaultPosOption}
                  onStop={(e, data) => {
                    updatePosOption(data, index);
                  }}
                >
                  <div
                    style={{ backgroundColor: itemOption.color }}
                    className="box-option-audio"
                  >
                    <input
                      id="input-card"
                      type="text"
                      onChange={(e) => setItemOption(e.target.value)}
                      placeholder="Option..."
                    />
                    <button
                      id="delete"
                      onClick={(e) => deleteNoteOption(itemOption.id)}
                    >
                      X
                    </button>
                  </div>
                </Draggable>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default connect()(PaletteAudioOptions);
