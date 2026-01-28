import { EntryMode } from '../App';

interface Props {
  onSelect: (mode: EntryMode) => void;
}

export function TitleScreen({ onSelect }: Props) {
  return (
    <main className="title-screen">
      <h1>Runeterra</h1>

      <section className="title-screen">
        <button onClick={() => onSelect('myth')}>Enter as Myth</button>
        <button onClick={() => onSelect('canon')}>Enter as Canon</button>
      </section>
    </main>
  );
}
