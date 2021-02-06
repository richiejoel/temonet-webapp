import React from "react";
import {connect, useSelector} from "react-redux";
import AddCard from "../../assets/svg/add_note.svg";
import Draggable from "react-draggable";
import "./PaletteInteractive.scss";
import "../../styles/theme.scss";


function PaletteInteractive(props): JSX.Element {
  const {item, items,updatePos, deleteNote, newitem, setItem, keyPress } = props;
  const theme_global_color = useSelector((state: any) => state.theme_global);
  const fix = () => {
    setItem(`Lesson`);
    newitem();
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
        <div className="notes">
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
