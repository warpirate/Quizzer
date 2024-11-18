"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';

interface UserNameFormProps {
  onSubmit: (name: string) => void;
}

export default function UserNameForm({ onSubmit }: UserNameFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 bg-gray-800 border-gray-700">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <Brain className="w-10 h-10 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Tech Quiz</h1>
          </div>
          <p className="text-gray-400 text-center">
            Test your knowledge across various technology domains
          </p>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-300">
                Enter your name to begin
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={!name.trim()}
            >
              Start Quiz
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}