import { EntryMode } from '../App';

interface Props {
  onSelect: (mode: EntryMode) => void;
}

export function TitleScreen({ onSelect }: Props) {
  return (
    <main>
      <h1>Runeterra</h1>

      <section>
        <button onClick={() => onSelect('myth')}>Enter as Myth</button>
        <button onClick={() => onSelect('canon')}>Enter as Canon</button>
      </section>
    </main>
  );
}
