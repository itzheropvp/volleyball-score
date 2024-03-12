"use client";
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [teamA, setTeamA] = useState({
    name: 'Team A',
    score: 0,
    sets: 0,
  });

  const [teamB, setTeamB] = useState({
    name: 'Team B',
    score: 0,
    sets: 0,
  });

  const handleAddPoint = (team : any) => {
    team === 'teamA'
      ? setTeamA({ ...teamA, score: teamA.score + 1 })
      : setTeamB({ ...teamB, score: teamB.score + 1 });
  };

  const handleRemovePoint = (team : any) => {
    if (team === 'teamA' && teamA.score > 0) {
      setTeamA({ ...teamA, score: teamA.score - 1 });
    } else if (team === 'teamB' && teamB.score > 0) {
      setTeamB({ ...teamB, score: teamB.score - 1 });
    }
  };

  useEffect(() => {
    if (teamA.score === 25) {
      setTeamA({ ...teamA, sets: teamA.sets + 1, score: 0 });
    }

    if (teamB.score === 25) {
      setTeamB({ ...teamB, sets: teamB.sets + 1, score: 0 });
    }
  }, [teamA.score, teamB.score]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-3xl text-center font-semibold mb-6">Volleyball Points.</h1>

          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <p className="text-lg font-semibold">{teamA.name}</p>
              <p className="text-4xl font-extrabold">{teamA.score}</p>
              <p className="text-lg font-semibold">Sets: {teamA.sets}</p>
              <div className="flex justify-center mt-2">
                <button
                  type="button"
                  onClick={() => handleRemovePoint('teamA')}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => handleAddPoint('teamA')}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-2"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold">{teamB.name}</p>
              <p className="text-4xl font-extrabold">{teamB.score}</p>
              <p className="text-lg font-semibold">Sets: {teamB.sets}</p>
              <div className="flex justify-center mt-2">
                <button
                  type="button"
                  onClick={() => handleRemovePoint('teamB')}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => handleAddPoint('teamB')}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-2"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
