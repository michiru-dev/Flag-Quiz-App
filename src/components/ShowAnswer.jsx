import React from 'react'
import CorrectAnswer from './CorrectAnswer'
import WrongAnswer from './WrongAnswer'

function ShowAnswer({ isAnswerCorrect, answerCountryName }) {

    const renderResult = () => {
        if (isAnswerCorrect === null) return null

        if (isAnswerCorrect) return <CorrectAnswer />

        return <WrongAnswer answerCountryName={answerCountryName} />
    }

    return (
        <>
            {renderResult()}
        </>
    )
}

export default ShowAnswer