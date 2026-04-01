import { useState } from 'react';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'quiz'>('home');
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const startQuiz = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setCurrentView('quiz');
  };

  const endQuiz = () => {
    setCurrentView('home');
    setSelectedChapter(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {currentView === 'home' && <Home onSelectChapter={startQuiz} />}
      {currentView === 'quiz' && selectedChapter && (
        <Quiz chapterId={selectedChapter} onEndQuiz={endQuiz} />
      )}
    </div>
  );
}
