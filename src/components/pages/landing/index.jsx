import React from 'react';
import { Link } from "react-router-dom";
import PlayAndScoreCheckButton from '../../common/PlayAndScoreCheckButton';


function LandingPage() {
    return (
        <div>
            <div className='appTitle'>World Flag Quiz</div>
            {/* <Link to={"quiz"}><button className='startButton'>PLAY</button></Link> */}
            <Link to={"quiz"}><PlayAndScoreCheckButton text={"PLAY"} className={"startButton"} /></Link>

        </div>
    )
}

export default LandingPage