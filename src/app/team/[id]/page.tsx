'use client';

import { useState, useEffect } from 'react';
import Field from '../../components/Field';
import PlayerCard from '../../components/PlayerCard';
import SearchPlayer from '../../components/SearchPlayer';
import { getTeam, getTeamPlayers, searchPlayers } from '../../lib/api';
import { useParams } from 'next/navigation';
import { Team, Player } from '@/app/types';
import Spinner from '@/app/components/Spinner';


export default function TeamPage() {
  const { id: teamId } = useParams<{ id: string }>();
  const [team, setTeam] = useState<Team | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [availablePlayers, setAvailablePlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (teamId) {
      fetchTeamData(teamId);
    }
  }, [teamId]);

  async function fetchTeamData(teamId: string) {
    try {
      console.log(`Buscando dados do time com ID: ${teamId}`);
      
      
      const teamData = await getTeam(teamId);
      console.log("Dados recebidos do time:", teamData);
      
      if (teamData) {
        setTeam(teamData);
        
        
        const playersData = await getTeamPlayers(teamId);
        console.log("Jogadores recebidos:", playersData);
        
       
        setPlayers(playersData);
      } else {
        console.warn("Nenhum dado encontrado para o time com ID:", teamId);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do time:", error);
    }
  }

  const handleSearch = async (searchTerm: string) => {
    try {
      const result = await searchPlayers(searchTerm, teamId);
      console.log("player", result);
      
      setAvailablePlayers(result);
    } catch (error) {
      console.error("Erro ao buscar jogadores:", error);
    }
  };

  const handleAddPlayerToTeam = (player: Player) => {
    if (!players.some((p) => p.id === player.id)) {
      setPlayers((prevPlayers) => [...prevPlayers, player]);
    }
    setAvailablePlayers([]);
  };

  if (!team) {
    return (
      <div className="flex justify-center h-screen items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{team.name}</h1>
      <Field players={players} />
      <SearchPlayer onSearch={handleSearch} />

      {availablePlayers.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Jogadores Disponíveis</h2>
          <div className="grid grid-cols-3 gap-4">
            {availablePlayers.map((player) => (
              <PlayerCard key={player.player.id} player={player} onSelect={() => handleAddPlayerToTeam(player)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
