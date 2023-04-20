import React from 'react'

function ProgressBar({ progress, howManyQue }) {

    const eachQueProgress = 100 / howManyQue
    const prevQueProgress = eachQueProgress * progress

    const barStyle = {
        width: `${prevQueProgress}%`
    }

    return (
        <div className='barOutline'>
            <div className='progress' style={barStyle}>{progress}/{howManyQue}</div>
        </div>
    )
}

export default ProgressBar