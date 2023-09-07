import React from 'react'
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className='Home-container'>
            <Sidebar />
            <Main />
        </div>
    );
}

export default Home;