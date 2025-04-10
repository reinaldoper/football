'use client';
import React from 'react';
import { FieldProps, positions } from '../types';


export default function Field({ players }: FieldProps) {
  /* console.log("Players definidos", players); */
  
  return (
    <div className="relative bg-green-500 h-[500px] w-full rounded-lg overflow-hidden">
      {players.map((player, index) => {
        /* console.log("Renderizando jogador:", player); */

        const positionStyle = positions[player.position];

        
        if (!positionStyle) {
          console.warn(`Posição não definida para ${player.position}`);
          return null;
        }

        
        const { x, y } = Array.isArray(positionStyle)
          ? positionStyle[index % positionStyle.length]
          : positionStyle;

        return (
          <div
            key={index}
            className="absolute rounded-full bg-white text-center w-30 h-30 flex items-center justify-center"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {player.name} 
          </div>
        );
      })}
    </div>
  );
}
