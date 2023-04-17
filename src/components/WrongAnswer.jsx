import React from 'react'

function WrongAnswer({ answerCountryName }) {
    return (
        <div>
            <div>Wrong</div>
            <div>Answer is: {answerCountryName}</div>
        </div>
    )
}

export default WrongAnswer