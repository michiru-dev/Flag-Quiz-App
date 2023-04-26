import { Link } from 'react-router-dom'
import { useState } from 'react'
import PlayAndScoreCheckButton from '../../common/PlayAndScoreCheckButton'
import QuestionQuantitySelector from './QuestionQuantitySelector'

function LandingPage() {
  const [numOfQuestions, setNumOfQuestions] = useState(0)

  const handleNumQuestions = (num: number) => {
    //classが2つついてるからそれの一つ目を取得
    // const num = Number(e.currentTarget.className.split(" ")[0])
    setNumOfQuestions(num)
  }

  return (
    <div>
      <div className="appTitle">World Flag Quiz</div>
      <QuestionQuantitySelector handleNumQuestions={handleNumQuestions} />
      <Link state={{ howManyQue: numOfQuestions }} to={'quiz'}>
        <PlayAndScoreCheckButton
          text={'PLAY'}
          className={'startButton'}
          disabled={numOfQuestions === 0}
        />
      </Link>
    </div>
  )
}

export default LandingPage
