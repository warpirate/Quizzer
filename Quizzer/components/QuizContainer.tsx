"use client";

import { useState } from 'react';
import { quizSets } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Brain, Trophy } from 'lucide-react';
import SetList from './SetList';
import QuizQuestion from './QuizQuestion';
import UserNameForm from './UserNameForm';
import QuizResults from './QuizResults';

export default function QuizContainer() {
  const [userName, setUserName] = useState('');
  const [currentSet, setCurrentSet] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [setScores, setSetScores] = useState<Record<number, number>>({});
  const [completedSets, setCompletedSets] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const handleStartQuiz = (name: string) => {
    setUserName(name);
    setGameStarted(true);
  };

  const handleAnswer = (selectedOption: number) => {
    const currentQuizSet = quizSets[currentSet];
    const question = currentQuizSet.questions[currentQuestion];
    
    const points = selectedOption === question.correctAnswer ? 10 : -2;
    const newScore = score + points;
    setScore(newScore);

    if (currentQuestion + 1 < currentQuizSet.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSetScores({ ...setScores, [currentSet]: newScore - (setScores[currentSet] || 0) });
      setCompletedSets([...completedSets, currentSet]);
      
      if (completedSets.length + 1 === quizSets.length) {
        setGameFinished(true);
      }
    }
  };

  const handleSetChange = (setIndex: number) => {
    if (!completedSets.includes(setIndex)) {
      setCurrentSet(setIndex);
      setCurrentQuestion(0);
    }
  };

  if (!gameStarted) {
    return <UserNameForm onSubmit={handleStartQuiz} />;
  }

  if (gameFinished) {
    return <QuizResults userName={userName} score={score} setScores={setScores} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6">
          <div className="w-1/4">
            <SetList
              sets={quizSets}
              currentSet={currentSet}
              completedSets={completedSets}
              onSetSelect={handleSetChange}
              setScores={setScores}
            />
          </div>
          <div className="w-3/4">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-blue-400" />
                  <h2 className="text-xl font-bold">
                    {quizSets[currentSet].name}
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">
                    Question {currentQuestion + 1} of {quizSets[currentSet].questions.length}
                  </span>
                  <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">
                    Score: {score}
                  </span>
                </div>
              </div>
              <QuizQuestion
                question={quizSets[currentSet].questions[currentQuestion]}
                onAnswer={handleAnswer}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}