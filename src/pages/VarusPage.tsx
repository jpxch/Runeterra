import { useEffect, useState } from 'react';
import { getChampionDetails } from '../../../riot-data/src';
import '../styles/varus-page.scss';

interface Props {
  onBack: () => void;
}

export default function VarusPage({ onBack }: Props) {
  const [varus, setVarus] = useState<any>(null);

  useEffect(() => {
    getChampionDetails('Varus')
      .then(setVarus)
      .catch(() => setVarus(null));
  }, []);

  if (!varus) {
    return <div>Loading Varus...</div>;
  }

  return (
    <div className="varus-page">
      <button className="back-button" onClick={onBack}>
        ← Back to Champions
      </button>

      <header className="varus-header">
        <h1>
          {varus.name} <span className="title">- {varus.title}</span>
        </h1>
      </header>

      <p className="varus-lore">{varus.lore}</p>

      <section className="varus-section">
        <h2>Passive</h2>
        <strong>{varus.passive.name}</strong>
        <p>{varus.passive.description}</p>
      </section>

      <section className="varus-section">
        <h2>Abilities</h2>

        {varus.spells.map((spell: any, i: number) => (
          <div key={spell.id} className="ability">
            <h3>
              {['Q', 'W', 'E', 'R'][i]} - {spell.name}
            </h3>
            <p>{spell.description}</p>
            <div className="meta">
              Cooldown: {spell.cooldown.join(' / ')} <br />
              Cost: {spell.cost.join(' / ')}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
