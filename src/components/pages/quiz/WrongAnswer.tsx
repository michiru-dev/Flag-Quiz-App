function WrongAnswer({ answerCountryName }: { answerCountryName: string }) {
  return (
    <div className="wrongAnswer">
      <div className="wrong">Wrong😫</div>
      <div className="correctAnswerIs">
        Correct answer is:&emsp;{' '}
        <span className="giveCorrectAnswer">{answerCountryName}</span>
      </div>
    </div>
  )
}

export default WrongAnswer
