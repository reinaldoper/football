'use client';
import React from 'react';
import Image  from "next/image";
import { Player } from '../types';


interface PlayerCardProps {
  player: Player;
  onSelect: () => void; 
}

export default function PlayerCard({ player, onSelect }: PlayerCardProps) {
  return (
    <div className="p-4 border rounded shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <h3 className="text-lg font-bold">{player.name}</h3>
      <p onClick={onSelect}>Posição: {player.statistics[0].games.position}</p>
      <div className="flex justify-center">
        <Image
          src={player.photo}
          alt={player.name}
          width={100}
          height={100}
          className="rounded-full"
        />  
      </div>
    </div>
  );
}

