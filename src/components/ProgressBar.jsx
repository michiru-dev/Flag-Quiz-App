import React from 'react'

function ProgressBar({ progress }) {
    const barStyle = {
        width: `${progress}%`
    }
    return (
        <div className='barOutline'>
            <div className='progress' style={barStyle}>{progress}</div>
        </div>
    )
}

export default ProgressBar