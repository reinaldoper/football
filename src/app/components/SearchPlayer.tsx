
'use client';

import { useState } from 'react';

interface SearchPlayerProps {
  onSearch: (searchTerm: string) => void;
}

export default function SearchPlayer({ onSearch }: SearchPlayerProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Buscar jogador..."
        value={searchTerm}
        onChange={handleChange}
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        Buscar
      </button>
    </form>
  );
}
