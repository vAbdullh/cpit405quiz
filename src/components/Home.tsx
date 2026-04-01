import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface HomeProps {
  onSelectChapter: (chapterId: string) => void;
}

export function Home({ onSelectChapter }: HomeProps) {
  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6 font-mono text-center">
      <h1 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-8 uppercase tracking-widest text-foreground">
        CPIT 405 – Web Application Development
      </h1>
      <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">Select a chapter to begin the quiz.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
          className="hover:border-foreground transition-colors cursor-pointer border-2" 
          onClick={() => onSelectChapter('html')}
        >
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl border-b pb-2">HTML Placeholder</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="default" className="w-full">Start Chapter</Button>
          </CardContent>
        </Card>

        <Card 
          className="hover:border-foreground transition-colors cursor-pointer border-2" 
          onClick={() => onSelectChapter('css')}
        >
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl border-b pb-2">CSS Placeholder</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="default" className="w-full">Start Chapter</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
