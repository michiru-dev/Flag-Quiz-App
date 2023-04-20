import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '../../common/Button'

function ShowQuestion({
    answerCountry,
    options,
    selectedOption,
    handleOptionChange,
    isSubmitted,
    handleNextButton,
    handleSubmit,
    isAllAnswered
}) {

    return (
        <div>
            <h2 className='questionTitle'>Which country is this?</h2>
            <div className='flagAndOptions'>
                <div className='imgBox'>
                    <img src={answerCountry.flags.png} alt="" />
                </div>
                <div className='radiogroup'>
                    {/* アロー関数が{}じゃない理由はreturn無しで描いてるから */}
                    {options.map((option) => (
                        <div key={uuidv4()} className="wrapper ">
                            <input
                                className='state'
                                type="radio"
                                name="countryOption"
                                value={option}
                                id={option}
                                //checkedは視覚的に選択されてることを見せるのに必要(true/false)
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                                disabled={isSubmitted} />
                            <label htmlFor={option} className="label">
                                <div className="indicator"></div>
                                <span className='text'>{option}</span>
                            </label>
                        </div>
                    ))}

                    {/* Answer Button */}
                    <Button
                        text={"Answer"}
                        onClick={handleSubmit}
                        disabled={selectedOption === null}
                        className={"submitButton"}
                        isButtonHide={isSubmitted}
                    />
                    {/* Next Button */}
                    <Button
                        text={"Next Question"}
                        onClick={handleNextButton}
                        className={"nextButton"}
                        isButtonHide={isAllAnswered || !isSubmitted}
                    />
                </div>
            </div>
        </div>
    )
}

export default ShowQuestion
