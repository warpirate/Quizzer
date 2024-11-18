"use client";

import { useState } from 'react';
import { Question } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (selectedOption: number) => void;
}

export default function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);
    setTimeout(() => {
      onAnswer(selectedOption);
      setSelectedOption(null);
      setIsAnswered(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-white">{question.question}</h3>
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={cn(
              "p-4 rounded-lg text-left transition-all",
              "hover:bg-gray-700/50",
              selectedOption === index && !isAnswered && "bg-blue-600",
              isAnswered && index === question.correctAnswer && "bg-green-600",
              isAnswered &&
                selectedOption === index &&
                selectedOption !== question.correctAnswer &&
                "bg-red-600",
              "disabled:opacity-50"
            )}
            disabled={isAnswered}
          >
            <span className="text-white">{option}</span>
          </button>
        ))}
      </div>
      <Button
        onClick={handleSubmit}
        disabled={selectedOption === null || isAnswered}
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
      >
        Submit Answer
      </Button>
    </div>
  );
}