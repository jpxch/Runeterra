interface Props {
  onSelect: (mode: 'story' | 'canon') => void;
}

export function TitleScreen({ onSelect }: Props) {
  return (
    <section className="title-screen">
      <h1>Runeterra</h1>

      <div className="title-actions">
        <button onClick={() => onSelect('story')}>Story</button>
        <button onClick={() => onSelect('canon')}>Canon</button>
      </div>
    </section>
  );
}
