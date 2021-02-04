import React, {useState} from 'react'
import {connect, useSelector} from "react-redux";
import Draggable from 'react-draggable';

import "./CreateLessonCard.scss";
import "../../styles/theme.scss";

function CreateLessonCard() {
    const theme_global = useSelector((state: any) => state.theme_global);
    const [activeDrags, setActiveDrags] = useState(0);

    const onStart = () => {
        setActiveDrags(activeDrags + 1);
    }

    const onStop = () => {
        setActiveDrags(activeDrags - 1);
    }

    const dragHandlers = {onStart: onStart, onStop: onStop};

    return (
        <div className={`create-lesson-card ${theme_global.theme}`}>
            <h2>Hii</h2>
            <Draggable {...dragHandlers} >
          <div className="box">I can be dragged anywhere</div>
        </Draggable>
        </div>
    )
}

export default connect()(CreateLessonCard);
