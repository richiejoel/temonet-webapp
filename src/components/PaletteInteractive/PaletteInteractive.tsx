import React, { useState, useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import AddCard from "../../assets/svg/add_note.svg";
import AddImage from "../../assets/svg/no-image.svg";
import Draggable from "react-draggable";
import CardPreview from "../../components/CardPreview";
import "./PaletteInteractive.scss";
import "../../styles/theme.scss";

function PaletteInteractive(props): JSX.Element {
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
    isDraggable,
    itemOption,
    itemsOptions,
    setItemOption,
    newItemOption,
    updatePosOption,
    deleteNoteOption,
    setIsDraggable,
  } = props;
  const theme_global_color = useSelector((state: any) => state.theme_global);
  const [content, setContent] = useState("");
  const [width, setWidth] = useState(0);
  const span = useRef<HTMLDivElement>(null);

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
  //{`${item.item}`}
  return (
    <div className={`palette-interactive ${theme_global_color.theme}`}>
      <div className="palette-interactive__content">
        <div className="palette-interactive__left">
          <div
            className="notes"
            onClick={() => {
              fix();
            }}
          >
            <img id="img-add" src={AddImage} alt="img-add" />
            <span>Añadir elemento</span>
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
            <span>Añadir Opciones</span>
          </div>
        </div>
        <div className="palette-interactive__right">
          {/*<div className="palette-interactive__right__colors"></div>
          <div className="palette-interactive__right__colors"></div>
          <div className="palette-interactive__right__colors"></div>
          <div className="palette-interactive__right__colors"></div>
          <div className="palette-interactive__right__colors"></div>
          <div className="palette-interactive__right_colors"></div>
          <div className="palette-interactive__right__colors"></div>
          <div className="palette-interactive__right__colors"></div>*/}
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
                  <div style={{ backgroundColor: item.color }} className="box">
                    <input
                      id="input-card"
                      type="text"
                      onChange={(e) => setItem(e.target.value)}
                      placeholder="Title option..."
                    />
                    <button id="delete" onClick={(e) => deleteNote(item.id)}>
                      X
                    </button>
                    <CardPreview />
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
                    className="box-option-image"
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

export default connect()(PaletteInteractive);
