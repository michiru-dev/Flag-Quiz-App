import './app.scss'
import Questions from './components/Questions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FinalScore from './components/FinalScore';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="result" element={<FinalScore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
