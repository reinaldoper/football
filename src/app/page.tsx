'use client';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import bool from '../../public/bool.png';

const initialTeams = [
  { id: 85, name: 'Paris Saint Germain' },
  { id: 77, name: 'Angers' },
  { id: 49, name: 'Chelsea' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-500">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Football Stats</h1>
    <div className="grid grid-cols-3 gap-4 p-8">
      {initialTeams.map((team) => (
        <Link
          href={`/team/${team.id}`}
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          key={team.id}
        >
          <h2 className="text-xl font-bold">{team.name}</h2>
        </Link>
      ))}
    </div>
    <div className="flex justify-center align-text-top p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <Image src={bool}  alt="Logo" className="w-100 h-100" />
    </div>
    </div>
  );
}
