import React from 'react';

export default function HUD({ score, questionNumber }) {
    return (
        <div id="hud">
            <div className='hud-wrapper'>
                <div className="hud-item">
                    <p className="hud-prefix">Vprašanje:</p>
                    <h1 className='hud-main-text'>{questionNumber}/3</h1>
                </div>
                <div className="hud-item">
                    <p className="hud-prefix">št.točk:</p>
                    <h1 className="hud-main-text">{score}</h1>
                </div>
            </div>    
        </div>
    );
}
