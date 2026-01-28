import { useEffect, useState } from 'react';
import { getChampionDetails } from '../../../riot-data/src';
import '../styles/varus-page.scss';

export default function VarusPage() {
  const [varus, setVarus] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getChampionDetails('Varus')
      .then(setVarus)
      .catch((err) => {
        console.error(err);
        setError('Failed to load Varus');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!varus) {
    return <div>Loading Varus...</div>;
  }

  return (
    <div className="varus-page">
      <header className="varus-header">
        <h1>
          {varus.name} <span className="title">- {varus.title}</span>
        </h1>
      </header>

      <p className="varus-loer">{varus.lore}</p>

      <section className="varus-section">
        <h2>Passive</h2>
        <strong>{varus.passive.description}</strong>
      </section>

      <section className="varus-section">
        <h2>Abilities</h2>

        {varus.spells.map((spell: any, i: number) => (
          <div key={spell.id} className="ability">
            <h3>
              {['Q', 'W', 'E', 'R'][i]} - {spell.name}
            </h3>
            <p>{spell.desciption}</p>
            <div className="data">
              Cooldown: {spell.cooldown.join(' / ')} <br />
              Cost: {spell.cost.join(' / ')}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
