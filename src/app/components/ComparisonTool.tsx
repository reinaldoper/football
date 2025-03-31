'use client';
import React from 'react';

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

interface ComparisonToolProps {
  players: Player[];
}

export default function ComparisonTool({ players }: ComparisonToolProps) {
  if (!players || players.length !== 2) {
    return <div className="p-4">Selecione dois jogadores para comparar.</div>;
  }

  const player1 = players[0];
  const player2 = players[1];

  const statsToCompare = [
    'stats.goals.total',
    'stats.passes.accuracy',
    'stats.tackles.blocks',
    'stats.dribbles.success',
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Estatística</th>
            <th className="p-2 border">{player1.name}</th>
            <th className="p-2 border">{player2.name}</th>
          </tr>
        </thead>
        <tbody>
          {statsToCompare.map((stat) => {
            const player1Stat = getNestedValue(player1, stat);
            const player2Stat = getNestedValue(player2, stat);
            const winner = player1Stat > player2Stat ? player1.name : player2.name;

            return (
              <tr key={stat}>
                <td className="p-2 border">{stat.replace('stats.', '')}</td>
                <td className={`p-2 border ${winner === player1.name ? 'bg-green-100' : ''}`}>{player1Stat}</td>
                <td className={`p-2 border ${winner === player2.name ? 'bg-green-100' : ''}`}>{player2Stat}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function getNestedValue<T extends object>(obj: T, path: string): number | string {
  return path.split('.').reduce<unknown>((acc, part) => (acc && typeof acc === 'object' && part in acc ? (acc as Record<string, unknown>)[part] : 'N/A'), obj) as number | string;
}
