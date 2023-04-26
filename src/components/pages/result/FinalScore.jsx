import { useLocation } from 'react-router-dom'
//reactrouterを使ってるためpropsをわたせないからuselocationを使ってる
import PlayAndScoreCheckButton from '../../common/PlayAndScoreCheckButton'
import { Link } from 'react-router-dom'
import { useCheckLocationState } from '../../../hooks/useCheckLocationState'
import { isValidLocationState } from '../../../utils/utilities'

function FinalScore() {
  const location = useLocation()

  useCheckLocationState(location.state)

  //useeffectは初回のレンダリング（描画）後じゃないと動かないから、上のuseeffectが動く前に
  //スコアの表示を試みないようにnullを返す
  if (!isValidLocationState(location.state)) return null

  const { countCorrectAnswer, howManyQue } = location.state

  return (
    <div>
      <div className="finalScore">
        You got {countCorrectAnswer}/{howManyQue}!
      </div>
      <Link to={'/'}>
        <PlayAndScoreCheckButton
          text={'Play again!'}
          className={'playAgainButton'}
        />
      </Link>
      {/* /ダッシュはルートからという意味がある */}
    </div>
  )
}

export default FinalScore
