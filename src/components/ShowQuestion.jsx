import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function ShowQuestion({ answerCountry, options, selectedOption, handleOptionChange, isSubmitted }) {
    return (
        <div>
            <h2>Which country does this flag belong to?</h2>
            <img src={answerCountry.flags.png} alt="" />
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
                            disabled={!isSubmitted} />
                        <label htmlFor={option}>{option}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShowQuestion
