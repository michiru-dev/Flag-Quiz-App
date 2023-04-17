import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
//reactrouterを使ってるためpropsをわたせないからuselocationを使ってる

function FinalScore() {
    const location = useLocation()
    const navigate = useNavigate();

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
        <div>You got {location.state.countCorrectAnswer}/10!</div>
    )
}

export default FinalScore