"use client";

import { Card } from '@/components/ui/card';
import { Trophy, Star, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuizResultsProps {
  userName: string;
  score: number;
  setScores: Record<number, number>;
}

export default function QuizResults({ userName, score, setScores }: QuizResultsProps) {
  const totalSets = Object.keys(setScores).length;
  const averageScore = score / totalSets;
  const maxPossibleScore = totalSets * 100;
  const percentage = (score / maxPossibleScore) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl p-8 bg-gray-800 border-gray-700">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <Trophy className="w-20 h-20 text-yellow-500" />
            <div className="absolute -top-2 -right-2 bg-blue-600 rounded-full p-2">
              <Star className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              Congratulations, {userName}!
            </h1>
            <p className="text-gray-400">
              You've completed all quiz sets
            </p>
          </div>

          <div className="w-full max-w-sm bg-gray-700 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">
              {score} pts
            </div>
            <div className="text-sm text-gray-400">
              Total Score ({percentage.toFixed(1)}%)
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-gray-700 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {totalSets}
              </div>
              <div className="text-sm text-gray-400">Sets Completed</div>
            </div>
            <div className="bg-gray-700 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {averageScore.toFixed(1)}
              </div>
              <div className="text-sm text-gray-400">Average Score</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Try Again
            </Button>
            <Button
              onClick={() => {
                // Implement sharing functionality
              }}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Results
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}