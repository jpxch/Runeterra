import { useState } from 'react';
import { TitleScreen } from './app/TitleScreen';
import { StoryRoot } from './app/StoryRoot';
import { CanonRoot } from './app/CanonRoot';

export type EntryMode = 'story' | 'canon';
type Screen = 'title' | EntryMode;

export default function App() {
  const [screen, setScreen] = useState<Screen>('title');

  if (screen === 'title') {
    return <TitleScreen onSelect={setScreen} />;
  }

  if (screen === 'story') {
    return <StoryRoot onExit={() => setScreen('title')} />;
  }

  return <CanonRoot onExit={() => setScreen('title')} />;
}
