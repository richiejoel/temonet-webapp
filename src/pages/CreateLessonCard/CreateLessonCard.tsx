import React, { useState, useCallback, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import Draggable from "react-draggable";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";
import PopupShadow from "../../components/PopupShadow";
import CardPreview from "../../components/CardPreview";
import PaletteInteractive from "../../components/PaletteInteractive";

import "./CreateLessonCard.scss";
import "../../styles/theme.scss";

function CreateLessonCard() {
  const theme_global = useSelector((state: any) => state.theme_global);
  const [activeDrags, setActiveDrags] = useState(0);
  const [albumImage, setAlbumImage] = useState("");
  const [file, setFile] = useState(null);
  const [hightWords, setHightWords] = useState<string>("");
  const [isDraggable, setIsDraggable] = useState(false);

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setFile(file);
    setAlbumImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop,
  });

  const onWait = () => {
    setIsDraggable(true);
  };

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };

  const [item, setItem] = useState("Lesson");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")!) || []
  );
  const [itemTitle, setItemTitle] = useState("Title lesson");
  const [itemsTitle, setItemsTitle] = useState(
    JSON.parse(localStorage.getItem("itemsTitle")!) || []
  );

  const newitem = () => {
    //if (item.trim() !== "") {
    const newitem = {
      id: uuidv4(),
      item: item,
      color: randomColor({
        luminosity: "light",
      }),
      defaultPos: { x: 100, y: -60 },
    };
    setItems((items) => [...items, newitem]);
    //setItem("");
    /*} /*
    else {
      alert("Enter a item");
      setItem("");
    }*/
  };

  const newItemTitle = () => {
    const newItemTitle = {
      id: uuidv4(),
      itemTitle: itemTitle,
      defaultPosTitle: { x: 100, y: -60 },
    };
    setItemsTitle((itemsTitle) => [...itemsTitle, newItemTitle]);
  };

  const keyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      newitem();
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("itemsTitle", JSON.stringify(itemsTitle));
  }, [itemsTitle]);

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
  };

  const updatePosTitle = (data, index) => {
    let newArr = [...itemsTitle];
    newArr[index].defaultPosTitle = { x: data.x, y: data.y };
    setItemsTitle(newArr);
  };

  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const deleteNoteTitle = (id) => {
    setItemsTitle(itemsTitle.filter((itemTitle) => itemTitle.id !== id));
  };

  const handleMouseUp = () => {
    console.log(`Selected text: ${window?.getSelection()?.toString()}`);
    setHightWords(window?.getSelection()?.toString()!);
  };

  //hurry cum yum install

  return (
    <div
      className={`create-lesson-card ${theme_global.theme}`}
      onMouseUp={handleMouseUp}
      onKeyUp={handleMouseUp}
    >
      <div className="content-lesson">
        {/*<Draggable {...dragHandlers}>
          <div className="box">
            <CardPreview/>
          </div>
  </Draggable>*/}
        {/*<PopupShadow hightWords={hightWords} />*/}
        <Button className="btn-lesson" onClick={() => onWait()}>
          Guardar Lección
        </Button>
      </div>
      <div className="palette">
        <PaletteInteractive
          item={item}
          items={items}
          updatePos={updatePos}
          deleteNote={deleteNote}
          newitem={newitem}
          setItem={setItem}
          keyPress={keyPress}
          itemTitle={itemTitle}
          itemsTitle={itemsTitle}
          setItemTitle={setItemTitle}
          newItemTitle={newItemTitle}
          deleteNoteTitle={deleteNoteTitle}
          updatePosTitle={updatePosTitle}
          isDraggable={isDraggable}
          setIsDraggable={setIsDraggable}
        />

        {/*<div id="new-item">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter something..."
          onKeyPress={(e) => keyPress(e)}
        />
        <button onClick={newitem}>ENTER</button>
      </div>
      {items.map((item, index) => {
        return (
          <Draggable
            key={item.id}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePos(data, index);
            }}
          >
            <div style={{ backgroundColor: item.color }} className="box">
              {`${item.item}`}
              <button id="delete" onClick={(e) => deleteNote(item.id)}>
                X
              </button>
            </div>
          </Draggable>
        );
      })}*/}
      </div>
    </div>
  );
}

export default connect()(CreateLessonCard);
