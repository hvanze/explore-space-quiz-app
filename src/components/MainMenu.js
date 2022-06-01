import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu() {
    return (
        <main className='d-flex bg-dark text-white text-center'>
            <div className='container btn-wrapper'>
                <div id='home' className='flex-center flex-column'>
                    <p className='author'>Dev:&nbsp;<a href='https://github.com/hvanze' target="_blank" rel='noopener noreferrer'>Anže Hvasti</a></p>
                    <Link to="/quizMenu" className="btn btn-primary play-quiz">Igraj kviz</Link>
                    <Link to="/scoreList" className="btn btn-secondary">Dosežki</Link>
                </div>
            </div>
        </main>
    );
}
