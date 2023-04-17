import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Questions from './components/Questions';

const getNationalData = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const jsonData = await response.json()
  return jsonData
}

function App() {
  const [question, setQuestion] = useState(null)
  //usestateは更新ボタンを押したら初期値（今回はnull）に戻ってしまう

  //useCallbackは第二引数の時だけ定義をし直す
  const handleFetchNationalData = useCallback(() => {
    getNationalData().then((data) => {
      console.log(data)

      //たくさんある国の配列の中のランダムなとこにアクセス
      const answerCountry = data[Math.floor(Math.random() * data.length)]
      console.log(answerCountry)

      //全世界の国名のみ取得
      const allCountriesName = data.map((country) => country.name.common)
      console.log(allCountriesName)
      const options = [
        answerCountry.name.common,
        //ランダムな3国名を取得
        allCountriesName[Math.floor(Math.random() * allCountriesName.length)],
        allCountriesName[Math.floor(Math.random() * allCountriesName.length)],
        allCountriesName[Math.floor(Math.random() * allCountriesName.length)],
      ].sort(() => Math.random() - 0.5)
      //sortは引数の結果によって並び替えを行う負の値→シャッフル、0&正の値→シャッフル無し
      //math.random-0.5の結果は50％の確率でシャッフルが行われる
      setQuestion({ answerCountry: answerCountry, options: options })

    })
  }, [])

  //初回にhandleFetchNationalDataを実行する
  //第二引数はなくてもいけるがwarningでてるので入れとく
  useEffect(() => {
    handleFetchNationalData()
  }, [handleFetchNationalData])



  return (
    <div>
      {/* usestateの特徴を考慮して初回レンダリング時のnullの時はここが更新かからないようにquestion&& */}
      {question && <Questions answerCountry={question.answerCountry} options={question.options} handleFetchNationalData={handleFetchNationalData} />}
    </div>
  );
}

export default App;
