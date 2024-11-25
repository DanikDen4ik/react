import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/ToDoList';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
            <div>
                <TemperatureConverter />
                <TodoList />
            </div>
        </Router>

    );
};

export default App;
