interface Props {
  onExit: () => void;
}

export function CanonRoot({ onExit }: Props) {
  return (
    <main>
      <button onClick={onExit}>Back</button>
      <h1>Canon</h1>
    </main>
  );
}
