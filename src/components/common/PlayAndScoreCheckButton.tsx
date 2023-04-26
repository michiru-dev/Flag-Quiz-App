type PlayAndScoreCheckButtonProps = {
  text: string
  className: string
  disabled?: boolean
}

function PlayAndScoreCheckButton({
  text,
  className,
  disabled,
}: PlayAndScoreCheckButtonProps) {
  return (
    <div className="playScoreButtonWrapper">
      <button
        className={`playScoreButton ${className}`}
        type="button"
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  )
}

export default PlayAndScoreCheckButton
