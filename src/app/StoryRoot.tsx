interface Props {
  onExit: () => void;
}

export function StoryRoot({ onExit }: Props) {
  return (
    <main>
      <button onClick={onExit}>Back</button>
      <h1>Story</h1>
    </main>
  );
}
