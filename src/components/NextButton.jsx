import React from 'react'

function NextButton({ handleNextButton }) {
    return (
        <button type='button' onClick={handleNextButton}>Next Question</button>
    )
}

export default NextButton