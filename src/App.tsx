import { useState } from 'react';
import { TitleScreen } from './app/TitleScreen';
import { StoryRoot } from './app/StoryRoot';
import { CanonRoot } from './app/CanonRoot';
import ChampionIndexPage from "./pages/ChampionIndexPage";
import VarusPage from "./pages/VarusPage";

export type EntryMode = 'story' | 'canon';
type Screen = "title" | "story" | "canon";

function App() {
  const savedMode = localStorage.getItem("runeterra:mode");
  const initialMode =
    savedMode === "myth" || savedMode === "canon" ? savedMode : null;

  const [mode, setMode] = useState<EntryMode | null>(initialMode);
  const [screen, setScreen] = useState<Screen>("title");

  function enterMode(selected: EntryMode) {
    localStorage.setItem("runeterra:mode", selected);
    setMode(selected);
    setScreen(selected);
  }

  function returnToTitle() {
    setScreen("title");
  }

  if (screen === "title") {
    return <TitleScreen onSelect={enterMode} />;
  }

  if (screen === "story") {
    return <StoryRoot onExit={returnToTitle} />;
  }

  return <CanonRoot onExit={returnToTitle} />;

}

export default App;