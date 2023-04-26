type ProgressBarProps = {
  progress: number
  howManyQue: number
}

function ProgressBar({ progress, howManyQue }: ProgressBarProps) {
  const eachQueProgress = 100 / howManyQue
  const prevQueProgress = eachQueProgress * progress

  const barStyle = {
    width: `${prevQueProgress}%`,
  }

  return (
    <div className="barOutline">
      <div className="progress" style={barStyle}>
        {progress}/{howManyQue}
      </div>
    </div>
  )
}

export default ProgressBar
