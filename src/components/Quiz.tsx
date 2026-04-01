import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { chapters, type MatchingQuestion } from '../data';

export function Quiz({ chapterId, onEndQuiz }: { chapterId: string, onEndQuiz: () => void }) {
  const chapter = chapters[chapterId];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  
  // Status matching: user answering -> checking answers
  const [status, setStatus] = useState<'answering' | 'checking'>('answering');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // State for the current question
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [matchingAnswers, setMatchingAnswers] = useState<Record<string, string>>({});
  const [showMatchingAnswers, setShowMatchingAnswers] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [tappedLeftId, setTappedLeftId] = useState<string | null>(null);

  const question = chapter.questions[currentIndex];
  const total = chapter.questions.length;

  const resetState = () => {
    setStatus('answering');
    setIsCorrect(null);
    setSelectedAnswer('');
    setMatchingAnswers({});
    setShowMatchingAnswers(false);
    setTappedLeftId(null);
  };

  const handleNext = () => {
    if (currentIndex + 1 < total) {
      setCurrentIndex(i => i + 1);
      resetState();
    } else {
      setShowResultModal(true);
    }
  };

  const submitAnswer = (forcedVal?: string) => {
    let currentIsCorrect = false;

    if (question.type === 'mcq' || question.type === 'tf') {
      const ans = forcedVal || selectedAnswer;
      currentIsCorrect = ans === question.correctAnswer;
    } else if (question.type === 'matching') {
      currentIsCorrect = question.pairs.every(p => matchingAnswers[p.id] === p.rightCorrect);
    }

    setIsCorrect(currentIsCorrect);
    setStatus('checking');

    if (currentIsCorrect) {
      setCorrect(c => c + 1);
      // Auto advance after 1.5 seconds if correct
      setTimeout(() => {
        // use functional state updates or direct Next call 
        // We will decouple handleNext from state to avoid stale closures, but for simple app it's ok.
        const nextIdx = currentIndex + 1;
        if (nextIdx < total) {
          setCurrentIndex(nextIdx);
          setStatus('answering');
          setIsCorrect(null);
          setSelectedAnswer('');
          setMatchingAnswers({});
          setShowMatchingAnswers(false);
          setTappedLeftId(null);
        } else {
           setShowResultModal(true);
        }
      }, 1500);
    } else {
      setIncorrect(i => i + 1);
    }
  };

  // Handlers for MCQ and TF
  const handleMcqTfSelect = (val: string) => {
    if (status !== 'answering') return;
    setSelectedAnswer(val);
    submitAnswer(val);
  };

  // Handlers for Matching Drag and Drop
  const handleDragStart = (e: React.DragEvent, id: string) => {
    if (status !== 'answering') return;
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (status !== 'answering') return;
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, rightItem: string) => {
    if (status !== 'answering') return;
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if (id) {
      setMatchingAnswers(prev => ({ ...prev, [id]: rightItem }));
    }
  };

  const handleUnassign = (id: string) => {
    if (status !== 'answering') return;
    const newAnswers = { ...matchingAnswers };
    delete newAnswers[id];
    setMatchingAnswers(newAnswers);
  };

  const renderMcqTfOptions = () => {
    if (question.type === 'matching') return null;
    const options = question.type === 'mcq' ? question.options : ['True', 'False'];
    
    return options.map(opt => {
      let bgColorClass = 'bg-secondary/50 hover:bg-secondary';
      
      if (status === 'checking') {
        const isThisCorrect = opt === question.correctAnswer;
        const isThisSelected = opt === selectedAnswer;
        
        if (isThisCorrect) {
          bgColorClass = 'bg-green-200 border-green-500 border';
        } else if (isThisSelected && !isThisCorrect) {
          bgColorClass = 'bg-red-200 border-red-500 border';
        } else {
          bgColorClass = 'bg-secondary/50 opacity-50';
        }
      }

      return (
        <div key={opt} className={`flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-md transition-colors ${bgColorClass}`}>
          <RadioGroupItem value={opt} id={opt} disabled={status !== 'answering'} />
          <Label htmlFor={opt} className="cursor-pointer flex-1 text-sm sm:text-base">{opt}</Label>
        </div>
      );
    });
  };

  const renderMatching = () => {
    const q = question as MatchingQuestion;
    // Get unique right options for drop zones
    const rightDropZones = Array.from(new Set(q.pairs.flatMap(p => p.rightOptions)));
    // Get unmatched left items to render at the top
    const unmatchedPairs = q.pairs.filter(p => !matchingAnswers[p.id]);

    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="p-3 sm:p-4 bg-muted/30 border rounded-md min-h-[80px]">
          <p className="text-xs sm:text-sm font-bold mb-2 uppercase text-muted-foreground">Tap or Drag items:</p>
          <div className="flex flex-wrap gap-2">
            {unmatchedPairs.length === 0 && <span className="text-xs sm:text-sm italic opacity-50">All items placed</span>}
            {unmatchedPairs.map(pair => (
              <div 
                key={pair.id}
                draggable={status === 'answering'}
                onDragStart={(e) => handleDragStart(e, pair.id)}
                onClick={() => {
                  if (status === 'answering') {
                    setTappedLeftId(tappedLeftId === pair.id ? null : pair.id);
                  }
                }}
                className={`px-2 sm:px-3 py-1 sm:py-2 bg-background border shadow-sm rounded cursor-pointer sm:cursor-move font-bold text-sm sm:text-base transition-colors ${status !== 'answering' ? 'opacity-50' : 'hover:border-foreground'} ${tappedLeftId === pair.id ? 'ring-2 ring-primary border-primary' : ''}`}
              >
                {pair.left}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
           <p className="text-xs sm:text-sm font-bold uppercase text-muted-foreground">Drop or Tap correctly:</p>
           {rightDropZones.map(dropZone => {
             const droppedHere = q.pairs.filter(p => matchingAnswers[p.id] === dropZone);
             
             return (
               <div 
                 key={dropZone} 
                 className={`flex flex-col sm:flex-row gap-2 sm:gap-3 p-2 sm:p-3 border rounded-md bg-secondary/20 min-h-[60px] cursor-pointer sm:cursor-default transition-colors ${tappedLeftId ? 'hover:bg-secondary/40 hover:border-primary/50' : ''}`}
                 onDragOver={handleDragOver}
                 onDrop={(e) => handleDrop(e, dropZone)}
                 onClick={() => {
                   if (status === 'answering' && tappedLeftId) {
                     setMatchingAnswers(prev => ({ ...prev, [tappedLeftId]: dropZone }));
                     setTappedLeftId(null);
                   }
                 }}
               >
                 <div className="sm:w-1/3 flex items-center font-bold text-sm sm:text-base p-2 bg-background rounded border border-dashed">
                   {dropZone}
                 </div>
                 <div className="sm:w-2/3 flex flex-wrap gap-2 items-center p-2 min-h-[40px]">
                   {droppedHere.length === 0 && <span className="text-xs sm:text-sm opacity-40">Tap item then tap here...</span>}
                   {droppedHere.map(p => {
                      let itemBg = 'bg-background border shadow-sm';
                      if (status === 'checking') {
                         if (showMatchingAnswers) {
                            itemBg = p.rightCorrect === dropZone ? 'bg-green-200 border-green-500' : 'bg-red-200 border-red-500 opacity-50';
                         } else {
                            itemBg = p.rightCorrect === dropZone ? 'bg-green-200 border-green-500' : 'bg-red-200 border-red-500';
                         }
                      }
                      return (
                        <div 
                          key={p.id}
                          className={`px-2 py-1 sm:px-3 sm:py-1 rounded font-bold text-sm sm:text-base flex items-center gap-2 ${itemBg}`}
                        >
                          {p.left}
                          {status === 'answering' && (
                             <button onClick={(e) => { e.stopPropagation(); handleUnassign(p.id); }} className="text-base text-muted-foreground hover:text-foreground border-l border-muted-foreground/30 pl-2 ml-1">✕</button>
                          )}
                        </div>
                      );
                   })}
                 </div>
               </div>
             )
           })}
        </div>
        
        {/* If showing answers, display the correct mapping below clearly */}
        {showMatchingAnswers && (
           <div className="mt-6 p-4 border border-green-500 bg-green-50 rounded-md">
             <h4 className="font-bold text-green-900 mb-2">Correct Answers:</h4>
             <ul className="list-disc pl-5 text-green-800 text-sm space-y-1">
                {q.pairs.map(p => (
                   <li key={p.id}><strong>{p.left}</strong> &rarr; {p.rightCorrect}</li>
                ))}
             </ul>
           </div>
        )}
      </div>
    );
  };

  const isMatchingSubmitDisabled = () => {
     if (question.type !== 'matching') return true;
     return Object.keys(matchingAnswers).length !== question.pairs.length;
  };

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-12 px-4 sm:px-6 font-mono">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold uppercase truncate pr-4">{chapter.title}</h2>
        <Button variant="outline" size="sm" className="sm:hidden" onClick={onEndQuiz}>Home</Button>
        <Button variant="outline" className="hidden sm:flex" onClick={onEndQuiz}>End Quiz</Button>
      </div>

      <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm uppercase tracking-wider bg-muted p-3 sm:p-4 rounded-md border text-center font-bold">
        <div className="flex-1">Total: <span className="sm:inline block">{total}</span></div>
        <div className="flex-1 text-primary border-l sm:border-l-0 border-border pl-2 sm:pl-0">Correct: <span className="sm:inline block">{correct}</span></div>
        <div className="flex-1 text-foreground/70 border-l sm:border-l-0 border-border pl-2 sm:pl-0">False: <span className="sm:inline block">{incorrect}</span></div>
      </div>

      <Card className="border-2 shadow-sm transition-all text-sm sm:text-base">
        <CardHeader className="bg-muted/30 border-b p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg flex justify-between">
            <span>Question {currentIndex + 1} of {total}</span>
            {status === 'checking' && isCorrect && <span className="text-green-600">Correct!</span>}
            {status === 'checking' && isCorrect === false && <span className="text-red-600">Incorrect</span>}
          </CardTitle>
          <p className="mt-1 sm:mt-2 text-foreground font-semibold text-base sm:text-lg py-1 sm:py-2">{question.text}</p>
        </CardHeader>
        <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
          {(question.type === 'mcq' || question.type === 'tf') && (
            <RadioGroup value={selectedAnswer} onValueChange={handleMcqTfSelect} className={`flex ${question.type === 'tf' ? 'flex-col sm:flex-row gap-4' : 'flex-col space-y-3'}`}>
              {renderMcqTfOptions()}
            </RadioGroup>
          )}

          {question.type === 'matching' && renderMatching()}
        </CardContent>
        <CardFooter className="bg-muted/10 border-t p-4 sm:p-6 rounded-b-xl flex justify-end gap-2 sm:gap-3 flex-wrap">
          
          {question.type === 'matching' && status === 'answering' && (
             <Button 
               className="w-full sm:w-auto font-bold uppercase tracking-wider" 
               size="lg"
               disabled={isMatchingSubmitDisabled()} 
               onClick={() => submitAnswer()}
             >
               Submit
             </Button>
          )}

          {status === 'checking' && isCorrect === false && (
             <>
               {question.type === 'matching' && !showMatchingAnswers && (
                  <>
                    <Button variant="outline" onClick={() => {
                       setStatus('answering');
                       setMatchingAnswers({});
                       // Remove the incorrect stat incremented earlier since they try again? 
                       // The user said "Try again if he miss...". Usually you don't dock points twice, 
                       // but for simplicity we let them just retry.
                    }}>Try Again</Button>
                    <Button variant="outline" onClick={() => setShowMatchingAnswers(true)}>Show Answers</Button>
                  </>
               )}
               <Button size="lg" className="w-full sm:w-auto" onClick={handleNext}>
                 Next Question
               </Button>
             </>
          )}
          
        </CardFooter>
      </Card>

      {showResultModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <Card className="w-full max-w-sm shadow-2xl border-2">
            <CardHeader className="text-center border-b bg-muted/30 pb-4">
              <CardTitle className="text-2xl font-bold uppercase tracking-widest">Quiz Finished!</CardTitle>
            </CardHeader>
            <CardContent className="text-center py-8">
              <div className="text-6xl font-black mb-6 tracking-tighter">
                {Math.round((correct / total) * 100)}%
              </div>
              <div className="flex justify-center gap-6 text-lg font-bold uppercase tracking-wider">
                <div className="text-primary flex flex-col"><span>Correct</span><span className="text-2xl">{correct}</span></div>
                <div className="text-red-500 flex flex-col"><span>False</span><span className="text-2xl">{incorrect}</span></div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center bg-muted/10 border-t pt-6 rounded-b-xl">
              <Button variant="outline" size="lg" className="w-full font-bold uppercase tracking-wider h-12" onClick={onEndQuiz}>Go Home</Button>
              <Button size="lg" className="w-full font-bold uppercase tracking-wider h-12" onClick={() => {
                setCurrentIndex(0);
                setCorrect(0);
                setIncorrect(0);
                resetState();
                setShowResultModal(false);
              }}>Restart</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
