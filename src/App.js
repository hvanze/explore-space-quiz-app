import React from 'react';
import './App.css';
import mainMenu from './components/MainMenu';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import quizMenu from './components/QuizMenu';
import scoreList from './components/ScoreList';

function App() {
    return (
        <Router>
            <div className="container">
                <Route exact path="/" component={mainMenu} />
                <Route path="/quizMenu" component={quizMenu} />
                <Route path="/scoreList" component={scoreList} />
            </div>
        </Router>
    );
}

export default App;
