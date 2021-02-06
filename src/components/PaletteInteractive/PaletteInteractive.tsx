import React from "react";
import {connect, useSelector} from "react-redux";
import AddCard from "../../assets/svg/add_note.svg";
import Draggable from "react-draggable";
import CardPreview from "../../components/CardPreview";
import "./PaletteInteractive.scss";
import "../../styles/theme.scss";


function PaletteInteractive(props): JSX.Element {
  const {item, items,updatePos, deleteNote, newitem, 
    setItem, keyPress, itemTitle, itemsTitle, setItemTitle, 
    newItemTitle, deleteNoteTitle, updatePosTitle } = props;
  const theme_global_color = useSelector((state: any) => state.theme_global);
  const fix = () => {
    setItem(`Lesson`);
    newitem();
  }
  const fixTitle = () => {
    setItemTitle(`Lesson Title`);
    newItemTitle();
  }
  //{`${item.item}`}
  return (
    <div className={`palette-interactive ${theme_global_color.theme}`}>
      <div className="palette-interactive__content">
      <div className="palette-interactive__left">
        <div className="notes" 
        onClick={()=>{fix()}}
        >
        <img id="img-add" src={AddCard} alt="img-add"/>
        <span>Añadir elemento</span>
        </div>
        <div className="notes"
        onClick={()=>{fixTitle()}}>
        <img id="img-add" src={AddCard} alt="img-add"/>
        <span>Añadir texto</span>
        </div>
        
      </div>
      <div className="palette-interactive__right">
        <div className="palette-interactive__right__colors">
        </div>
        <div className="palette-interactive__right__colors">
        </div>
        <div className="palette-interactive__right__colors">
        </div>
        <div className="palette-interactive__right__colors">
        </div>
        <div className="palette-interactive__right__colors">
        </div>
        <div className="palette-interactive__right_colors">
        </div>
        <div className="palette-interactive__right__colors">
        </div>
        <div className="palette-interactive__right__colors">
        </div>
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
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePos(data, index);
            }}
          >
            <div style={{ backgroundColor: item.color }} className="box">
              <input id="input-card" type="text" 
              
              onChange={(e) => setItem(e.target.value)}
              placeholder="Title option..."
              
               />
              <button id="delete" onClick={(e) => deleteNote(item.id)}>
                X
              </button>
              <CardPreview/>
            </div>
          </Draggable>
          </>
        );
      })}

{itemsTitle.map((itemTitle, index) => {
  return(
<Draggable
            key={itemTitle.id}
            defaultPosition={itemTitle.defaultPosTitle}
            onStop={(e, data) => {
              updatePosTitle(data, index);
            }}
          >
            <div className="texto">
              <input id="input-card" type="text" 
              onChange={(e) => (e.target.value)}
              placeholder="Title lesson..." 
               />
              <button id="delete" onClick={(e) => deleteNoteTitle(itemTitle.id)}>
                X
              </button>
            </div>
          </Draggable>
);
})}

    </div>
      </div>
    </div>
  );
}

export default connect()(PaletteInteractive);
