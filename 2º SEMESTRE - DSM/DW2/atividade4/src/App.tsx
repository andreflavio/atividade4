import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "./contexts";
import Megasena from "./components/Megasena";
import Quina from "./components/Quina";
import Timemania from "./components/Timemania";

export default function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/megasena" element={<Megasena />} />
          <Route path="/quina" element={<Quina />} /> {/* Corrigido para /quina */}
          <Route path="/timemania" element={<Timemania />} /> {/* Corrigido para /timemania */}
        </Routes>
      </Router>
    </Provider>
  );
}
