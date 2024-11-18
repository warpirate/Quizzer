"use client";

import { QuizSet } from '@/lib/questions';
import { cn } from '@/lib/utils';
import { CheckCircle, Circle } from 'lucide-react';

interface SetListProps {
  sets: QuizSet[];
  currentSet: number;
  completedSets: number[];
  setScores: Record<number, number>;
  onSetSelect: (index: number) => void;
}

export default function SetList({
  sets,
  currentSet,
  completedSets,
  setScores,
  onSetSelect,
}: SetListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white mb-4">Quiz Sets</h2>
      <div className="space-y-2">
        {sets.map((set, index) => (
          <button
            key={set.id}
            onClick={() => onSetSelect(index)}
            className={cn(
              "w-full p-4 rounded-lg text-left transition-all",
              "hover:bg-gray-700/50",
              currentSet === index
                ? "bg-gray-700 border-l-4 border-blue-500"
                : "bg-gray-800",
              completedSets.includes(index) && "opacity-75"
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">{set.name}</h3>
                <p className="text-sm text-gray-400">{set.description}</p>
              </div>
              <div className="flex items-center gap-2">
                {completedSets.includes(index) ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-green-500">
                      {setScores[index] || 0} pts
                    </span>
                  </>
                ) : (
                  <Circle className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}