function PlayAndScoreCheckButton({ text, className, disabled }) {
    return <div className="playScoreButtonWrapper">
        <button className={`playScoreButton ${className}`}
            type='button' disabled={disabled}>{text}</button>
    </div>
}

export default PlayAndScoreCheckButton