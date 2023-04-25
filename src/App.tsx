import './app.scss'
import "./styles/button.scss"
import "./styles/landing.scss"
import "./styles/quiz.scss"
import "./styles/playAndScoreCheckButton.scss"
import "./styles/finalScore.scss"
import "./styles/radioButton.scss"
import Questions from './components/pages/quiz'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FinalScore from './components/pages/result/FinalScore';
import LandingPage from './components/pages/landing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<Questions />} />
          <Route path="/quiz/result" element={<FinalScore />} />
        </Routes>
      </BrowserRouter>
      <footer>© 2023 Michiru.I</footer>
    </div>
  );
}

export default App;
