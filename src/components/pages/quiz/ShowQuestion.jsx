import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import SubmitButton from './SubmitButton'
import NextButton from "./NextButton"

function ShowQuestion({ answerCountry, options, selectedOption,
    handleOptionChange, isSubmitted, handleNextButton, handleSubmit, progress }) {
    return (
        <div>
            <h2 className='questionTitle'>Which country is this?</h2>
            <div className='flagAndOptions'>
                <div className='imgBox'>
                    <img src={answerCountry.flags.png} alt="" />
                </div>
                <div className='optionsAndButton'>
                    <ul>
                        {/* アロー関数が{}じゃない理由はreturn無しで描いてるから */}
                        {options.map((option) => (
                            <li key={uuidv4()}>
                                <input
                                    type="radio"
                                    name="countryOption"
                                    value={option}
                                    id={option}
                                    //checkedは視覚的に選択されてることを見せるのに必要(true/false)
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange}
                                    disabled={isSubmitted} />
                                <label htmlFor={option}>{option}</label>
                            </li>
                        ))}
                    </ul>
                    {!isSubmitted ? <SubmitButton handleSubmit={handleSubmit} selectedOption={selectedOption} />
                        : <NextButton handleNextButton={handleNextButton} progress={progress} />}
                </div>
            </div>
        </div>
    )
}

export default ShowQuestion
