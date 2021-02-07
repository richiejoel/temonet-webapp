import React from 'react'

import "./PopupShadow.scss";

function PopupShadow(props): JSX.Element {
    return (
        <div className="popup-shadow">
            <div className="popup-shadow-content">
                <div className="popup-elements">B</div>
                <div className="popup-elements">K</div>
                <div className="popup-elements">U</div>
                <div className="popup-elements">+</div>
                <div className="popup-elements">-</div>
            </div>
        </div>
    )
}

export default PopupShadow;
