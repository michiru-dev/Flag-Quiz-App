import React from 'react'

function NextButton({ handleNextButton }) {
    return (
        <button className="nextButton" type='button' onClick={handleNextButton}>Next Question</button>
    )
}

export default NextButton