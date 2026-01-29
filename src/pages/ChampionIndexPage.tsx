import { useEffect, useState } from 'react';
import { getChampionRoster } from '../../../riot-data/src';
import '../styles/champion-index.scss';

interface Props {
  onSelectChampion: (id: string) => void;
}

export default function ChampionIndexPage({ onSelectChampion }: Props) {
  const [champions, setChampions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChampionRoster().then((data) => {
      setChampions(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="loading">Loading champions...</div>;

  return (
    <div className="champion-index">
      <h1>Champions</h1>

      <div className="champion-grid">
        {champions.map((champ) => (
          <button
            key={champ.id}
            className="champion-card"
            onClick={() => onSelectChampion(champ.id)}
          >
            <div className="name">{champ.name}</div>
            <div className="title">{champ.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
