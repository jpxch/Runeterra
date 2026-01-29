import { useState } from 'react';
import { TitleScreen } from './app/TitleScreen';
import { StoryRoot } from './app/StoryRoot';
import { CanonRoot } from './app/CanonRoot';

export type EntryMode = 'story' | 'canon';
type Screen = 'title' | EntryMode;

function App() {
  const [screen, setScreen] = useState<Screen>('title');

  function enterMode(mode: EntryMode) {
    setScreen(mode);
  }

  function returnToTitle() {
    setScreen('title');
  }

  switch (screen) {
    case 'title':
      return <TitleScreen onSelect={enterMode} />;
    case 'story':
      return <StoryRoot onExit={returnToTitle} />;
    case 'canon':
      return <CanonRoot onExit={returnToTitle} />;
  }
}

export default App;
