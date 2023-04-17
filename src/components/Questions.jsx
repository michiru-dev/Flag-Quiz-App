import React from 'react'
import SubmitButton from './SubmitButton'
import ShowAnswer from './ShowAnswer'
import ShowQuestion from './ShowQuestion'
import { useState, useEffect, useCallback } from 'react';
import NextButton from "./NextButton"
import { getNationalData } from '../repository/country';
import ProgressBar from './ProgressBar';
import { Link } from "react-router-dom";

function Questions() {

    const [selectedOption, setSelectedOption] = useState(null)
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [question, setQuestion] = useState(null)
    //usestateは更新ボタンを押したら初期値（今回はnull）に戻ってしまう
    const [progress, setprogress] = useState(0)
    const [countCorrectAnswer, setCountCorrectAnswer] = useState(0)

    //useCallbackは第二引数の時だけ定義をし直す
    const handleFetchNationalData = useCallback(() => {
        getNationalData().then((data) => {

            //たくさんある国の配列の中のランダムなとこにアクセス
            const answerCountry = data[Math.floor(Math.random() * data.length)]

            //全世界の国名のみ取得
            const allCountriesName = data.map((country) => country.name.common)
            const options = [
                answerCountry.name.common,
                //ランダムな3国名を取得
                allCountriesName[Math.floor(Math.random() * allCountriesName.length)],
                allCountriesName[Math.floor(Math.random() * allCountriesName.length)],
                allCountriesName[Math.floor(Math.random() * allCountriesName.length)],
            ].sort(() => Math.random() - 0.5)
            //sortは引数の結果によって並び替えを行う負の値→シャッフル、0&正の値→シャッフル無し
            //math.random-0.5の結果は50％の確率でシャッフルが行われる
            setQuestion({ answerCountry: answerCountry, options: options })

        })
    }, [])

    //初回にhandleFetchNationalDataを実行する
    //第二引数はなくてもいけるがwarningでてるので入れとく
    useEffect(() => {
        handleFetchNationalData()
    }, [handleFetchNationalData])



    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const handleSubmit = () => {
        if (question === null) return;
        setprogress(progress + 10)
        //答えが一致しているか判定
        const isAnswerMatch = selectedOption === question.answerCountry.name.common
        setIsSubmitted(true)
        if (isAnswerMatch) {
            setIsAnswerCorrect(true)
            setCountCorrectAnswer(countCorrectAnswer + 1)
        } else {
            setIsAnswerCorrect(false)
        }
    }


    const handleNextButton = () => {
        setIsSubmitted(false)
        setIsAnswerCorrect(null)
        setSelectedOption(null)
        handleFetchNationalData()
    }

    /* usestateの特徴を考慮して初回レンダリング時のnullの時は何も表示しない */
    if (question === null) return null

    return (
        <div>
            <ProgressBar progress={progress} />
            <ShowQuestion answerCountry={question.answerCountry} options={question.options} selectedOption={selectedOption} handleOptionChange={handleOptionChange} isSubmitted={isSubmitted} />
            {!isSubmitted ? <SubmitButton handleSubmit={handleSubmit} />
                : <NextButton handleNextButton={handleNextButton} />}
            {selectedOption !== null && <ShowAnswer isAnswerCorrect={isAnswerCorrect} answerCountryName={question.answerCountry.name.common} />}
            {progress === 100 && <Link state={{ countCorrectAnswer: countCorrectAnswer }} to={"result"}><button> Check your final Score!</button></Link>}

        </div >
    )
}

export default Questions