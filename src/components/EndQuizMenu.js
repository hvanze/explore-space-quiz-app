import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from './Firebase/FirebaseContext';

export default function EndQuizMenu({ score }) {
    const [username, setUsername] = useState('');
    const firebase = useFirebase();

    const onUsernameChange = (e) => {
        const updatedUsername = e.target.value;
        setUsername(updatedUsername);
    };

    const saveHighScore = (e) => {
        e.preventDefault();
        const record = {
            name: username,
            score
        };
        console.log(record);
    };

    return (
        <section className='d-flex bg-dark text-white'>
            <div className="container end-game-container">
                <div id='end' className='flex-center flex-column'>
                    <span><span class="score-num-emoji">👾</span>število točk<span class="score-num-emoji">👾</span></span>
                    <h1 id='finalScore'>{score}</h1>
                    <form onSubmit={saveHighScore}>
                        <input type="text" name="username" id="username" placeholder="Vpiši ime :)"value={username} onChange={onUsernameChange}/>
                        <p className="points"><span className="medal">🥇</span> 30 točk (3/3)</p>
                        <p className="points"><span className="medal">🥈</span> 20 točk (2/3)</p>
                        <p className="points mb"><span className="medal">🥉</span> 10 točk (1/3)</p>
                        <button type="submit" className="btn-dis" disabled={!username}>Shrani</button>
                    </form>
                    <Link to="/" className="btn-end">Ponovi kviz</Link>
                    <Link to="/" className="btn-end red">Domov</Link>
                </div>
             </div>         
        </section>
       
    );
}
