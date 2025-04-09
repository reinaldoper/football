import { Team, Player } from "../types";


const API_KEY = process.env.NEXT_PUBLIC_API_FOOTBALL_KEY;
const API_URL = 'https://v3.football.api-sports.io';

async function apiRequest<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${API_URL}/${endpoint}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  const headers = {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY || ''
  };

  const response = await fetch(url.toString(), { headers });

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }

  const data = await response.json();
  /* console.log("Dados da API:", data); */
  
  return data.response as T;
}



export async function searchPlayers(name: string, teamId?: string): Promise<Player[]> {
  const params: Record<string, string> = { search: name };

  if (teamId) {
    params.team = teamId;
  }

  const data = await apiRequest<{ player: Player }[]>('players', params);
  console.log(data, "data");
  
  
  return data as unknown as Player[];
}


export async function getTeam(id: string): Promise<Team | null> {
  const data = await apiRequest<{ team: Team }[]>('teams', { id });
  return data.length > 0 ? data[0].team : null; 
}

export async function getTeamPlayers(teamId: string): Promise<Player[]> {
  try {
    const data = await apiRequest<{ players: Player[] }[]>('players/squads', { team: teamId });

    if (data.length > 0 && data[0].players) {
      return data[0].players;
    } else {
      console.warn("Nenhum jogador encontrado para o time com ID:", teamId);
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar jogadores do time:", error);
    return [];
  }
}

