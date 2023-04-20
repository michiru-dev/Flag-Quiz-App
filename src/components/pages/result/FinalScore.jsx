import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
//reactrouterを使ってるためpropsをわたせないからuselocationを使ってる
import PlayAndScoreCheckButton from '../../common/PlayAndScoreCheckButton';
import { Link } from 'react-router-dom';

function FinalScore() {
    const location = useLocation()
    const navigate = useNavigate()
    const { countCorrectAnswer, howManyQue } = location.state;


    //urlベタ打ちしてresultに入ってきた場合は問題の最初にリディレクト
    useEffect(() => {
        if (
            //optional chainingでundefineか確認＋一番最後の値は自分で確認
            typeof location.state?.countCorrectAnswer === 'undefined' ||
            location.state.countCorrectAnswer === null
        ) {
            navigate('/')
            return
        }
    }, [navigate, location])
    //初回のみでいいんだけど、warningがでるから



    //navigateが初回のレンダリングがないと動かないから、上のuseeffectが動く前にスコアがでちゃわないようにnullを返す
    if (
        typeof location.state?.countCorrectAnswer === 'undefined' ||
        location.state.countCorrectAnswer === null
    ) return null


    return (
        <div>
            <div className='finalScore'>You got {countCorrectAnswer}/{howManyQue}!</div>
            <Link to={"/"}><PlayAndScoreCheckButton text={"Play again!"} className={"playAgainButton"} /></Link>
            {/* /ダッシュはルートからという意味がある */}
        </div>
    )
}

export default FinalScore