import { useState } from 'react';
import { TitleScreen } from './app/TitleScreen';
import { MythRoot } from './app/MythRoot';
import { CanonRoot } from './app/CanonRoot';

export type EntryMode = 'myth' | 'canon';

function App() {
  const [mode, setMode] = useState<EntryMode | null>(() => {
    const saved = localStorage.getItem('runeterra:mode');
    return saved == 'myth' || saved == 'canon' ? saved : null;
  });

  function handleSelect(selected: EntryMode) {
    localStorage.setItem('runeterra:mode', selected);
    setMode(selected);
  }

  if (!mode) {
    return <TitleScreen onSelect={handleSelect} />;
  }

  if (mode === 'myth') {
    return <MythRoot />;
  }

  return <CanonRoot />;
}

export default App;
