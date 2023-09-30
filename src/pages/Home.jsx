import React from 'react'
import Main from '../components/Main';
import Signup from '../components/Signup';
import Profile from '../components/Profile';
import BubbleGame from '../components/game/BubbleGame';

const Home = () => {
    return (
        <div className='Home'>
            
            {/* <Main /> */}
           <BubbleGame/>
        </div>
    );
}

export default Home;