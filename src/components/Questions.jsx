import React from 'react'
import SubmitButton from './SubmitButton'
import ShowAnswer from './ShowAnswer'
import ShowQuestion from './ShowQuestion'
import { useState } from 'react'
import NextButton from "./NextButton"

function Questions({ answerCountry, options, handleFetchNationalData }) {

    const [selectedOption, setSelectedOption] = useState(null)
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)



    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    //答えが一致しているか判定
    const isAnswerMatch = selectedOption === answerCountry.name.common

    const handleSubmit = () => {
        setIsSubmitted(true)
        if (isAnswerMatch) {
            setIsAnswerCorrect(true)
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

    return (
        <div>
            <ShowQuestion answerCountry={answerCountry} options={options} selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
            {!isSubmitted ? <SubmitButton handleSubmit={handleSubmit} />
                : <NextButton handleNextButton={handleNextButton} />}
            {selectedOption !== null && <ShowAnswer isAnswerCorrect={isAnswerCorrect} answerCountryName={answerCountry.name.common} />}


        </div >
    )
}

export default Questions