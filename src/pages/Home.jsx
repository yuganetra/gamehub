import React from 'react'
import Main from '../components/Main';
import Profile from '../components/Profile';
import Signup from "../components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
    return (
        <div className='Home'>
            <Main />
        </div>
    );
}

export default Home;