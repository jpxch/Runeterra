import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChampionIndexPage from '../pages/ChampionIndexPage';
import VarusPage from '../pages/VarusPage';

interface Props {
  onExit: () => void;
}

export function CanonRoot({ onExit }: Props) {
  return (
    <BrowserRouter>
      <main>
        <header>
          <button onClick={onExit}>← Exit Canon</button>
        </header>

        <Routes>
          {/* Canon home = champion index */}
          <Route path="/" element={<Navigate to="/champions" replace />} />

          <Route
            path="/champions"
            element={
              <ChampionIndexPage
                onSelectChampion={(id) => {
                  window.location.href = `/champions/${id}`;
                }}
              />
            }
          />

          <Route
            path="/champions/varus"
            element={<VarusPage onBack={() => window.history.back()} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
