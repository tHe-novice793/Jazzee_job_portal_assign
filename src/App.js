import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import StudentProfile from './pages/StudentProfile';
import EmployerProfile from './pages/EmployerProfile';
import UniversityProfile from './pages/UniversityProfile';
import './App.css';


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/student-profile" element={<StudentProfile />} />
                    <Route path="/employer-profile" element={<EmployerProfile />} />
                    <Route path="/university-profile" element={<UniversityProfile />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
