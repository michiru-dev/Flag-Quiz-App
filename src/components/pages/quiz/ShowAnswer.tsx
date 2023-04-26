import CorrectAnswer from './CorrectAnswer'
import WrongAnswer from './WrongAnswer'

type ShowAnswerProps = {
  isAnswerCorrect: boolean | null
  answerCountryName: string
}

function ShowAnswer({ isAnswerCorrect, answerCountryName }: ShowAnswerProps) {
  const renderResult = () => {
    if (isAnswerCorrect === null) return null

    if (isAnswerCorrect) return <CorrectAnswer />

    return <WrongAnswer answerCountryName={answerCountryName} />
  }

  return <>{renderResult()}</>
}

export default ShowAnswer
