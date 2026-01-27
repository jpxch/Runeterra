interface Props {
  onExit: () => void;
}

export function MythRoot({ onExit }: Props) {
  return (
    <main>
      <button onClick={onExit}>Back</button>
      <h1>Myth</h1>
    </main>
  );
}
