import { academicRecords } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export function Academics() {
  return (
    <AnimatedSection id="academics">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Academic Records
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">My educational journey and qualifications.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {academicRecords.map((record, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="font-headline text-xl">{record.degree}</CardTitle>
                  <CardDescription className="mt-1">{record.institution}</CardDescription>
                </div>
                <div className="text-sm text-muted-foreground whitespace-nowrap pl-4">{record.period}</div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{record.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
