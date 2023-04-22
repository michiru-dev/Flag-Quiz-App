import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
//reactrouterを使ってるためpropsをわたせないからuselocationを使ってる
import PlayAndScoreCheckButton from '../../common/PlayAndScoreCheckButton';
import { Link } from 'react-router-dom';

function FinalScore() {
    const location = useLocation()
    const navigate = useNavigate()

    //urlベタ打ちしてresultに入ってきた場合は問題の最初にリディレクト
    useEffect(() => {
        if (
            //typeofはnullを判定できない
            location.state === null ||
            location.state.countCorrectAnswer === null ||
            location.state.howManyQue === null
        ) {
            navigate('/')
            return
        }
    }, [navigate, location])
    //初回のみでいいんだけど、warningがでるから



    //useeffectは初回のレンダリング（描画）後じゃないと動かないから、上のuseeffectが動く前に
    //スコアの表示を試みないようにnullを返す
    if (
        location.state === null ||
        location.state.countCorrectAnswer === null ||
        location.state.howManyQue === null
    ) return null

    const { countCorrectAnswer, howManyQue } = location.state

    return (
        <div>
            <div className='finalScore'>You got {countCorrectAnswer}/{howManyQue}!</div>
            <Link to={"/"}><PlayAndScoreCheckButton text={"Play again!"} className={"playAgainButton"} /></Link>
            {/* /ダッシュはルートからという意味がある */}
        </div>
    )
}

export default FinalScore