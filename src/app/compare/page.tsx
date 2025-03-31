'use client';

import { useState } from 'react';
import ComparisonTool from '../components/ComparisonTool';
import { searchPlayers } from '../lib/api';

interface Stats {
  goals: { total: number };
  passes: { accuracy: number };
  tackles: { blocks: number };
  dribbles: { success: number };
}

interface Player {
  name: string;
  position: string;
  id: number;
  stats: Stats;
}

export default function ComparePage() {
  const [player1, setPlayer1] = useState<Player | null>(null);
  const [player2, setPlayer2] = useState<Player | null>(null);

  const handleSearchPlayer = async (name: string, setPlayer: (player: Player | null) => void) => {
    const players = await searchPlayers(name);
    if (players.length > 0) {
      setPlayer(players[0]);
    } else {
      alert('Jogador não encontrado');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Comparação de Jogadores</h1>

      <div className="flex gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Jogador 1</h2>
          <input
            type="text"
            placeholder="Buscar jogador 1"
            onBlur={(e) => handleSearchPlayer(e.target.value, setPlayer1)}
            className="border p-2"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Jogador 2</h2>
          <input
            type="text"
            placeholder="Buscar jogador 2"
            onBlur={(e) => handleSearchPlayer(e.target.value, setPlayer2)}
            className="border p-2"
          />
        </div>
      </div>

      {player1 && player2 && <ComparisonTool players={[player1, player2]} />}
    </div>
  );
}
