"use client";

import { useEffect, useState } from "react";

export default function RobloxCard({ universeId }) {
  const [gameData, setGameData] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dados do jogo
        const gameRes = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
        const gameJson = await gameRes.json();
        const game = gameJson.data[0];
        setGameData(game);

        // Imagem do jogo
        const thumbRes = await fetch(
          `https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&size=150x150&format=Png&isCircular=false`
        );
        const thumbJson = await thumbRes.json();
        const icon = thumbJson.data[0].imageUrl;
        setThumbnail(icon);
      } catch (err) {
        console.error("Erro ao buscar dados do Roblox:", err);
      }
    };

    fetchData();
  }, [universeId]);

  if (!gameData) return <p className="text-white">Carregando...</p>;

  return (
    <div className="bg-zinc-900 text-white p-4 rounded-2xl shadow-xl w-full max-w-sm">
      <img src={thumbnail} alt="Game Icon" className="rounded-xl mb-4" />
      <h2 className="text-xl font-bold">{gameData.name}</h2>
      <p className="text-sm text-zinc-400 mb-2">{gameData.description?.slice(0, 120) || "Sem descrição."}</p>
      <div className="text-sm">
        <p><strong>Jogadores:</strong> {gameData.playing.toLocaleString()}</p>
        <p><strong>Visitas:</strong> {gameData.visits.toLocaleString()}</p>
        <p><strong>Criador:</strong> {gameData.creator.name}</p>
      </div>
    </div>
  );
}
