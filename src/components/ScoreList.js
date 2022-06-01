import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ScoreList() {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <section className="d-flex bg-dark text-white score-page">
        <div className="score-list-wrapper">
            <div className="container">
                <div id="highScores" className="flex-center flex-column">
                    <h1 id="finalScoreText" className="flex-center">🏆Dosežki🏆</h1>
                    <ul id="highScoresList"></ul>
                    <Link to="/" className="btn btn-score">Nazaj..</Link>
                </div>
            </div>
        </div>
    </section>
    );
}
