import { recognitions } from '@/lib/data';
import { AnimatedSection } from '@/components/common/animated-section';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export function Recognition() {
  return (
    <AnimatedSection id="recognition" className="bg-secondary">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Recognition Showcase
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">Awards, certifications, and other achievements.</p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        <ul className="space-y-8">
          {recognitions.map((rec, index) => (
            <li key={index} className="flex items-start gap-6 p-6 bg-background rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 text-accent">
                  <rec.icon />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <h3 className="text-lg font-headline font-semibold">{rec.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:pl-4">{rec.date}</p>
                </div>
                <p className="font-medium text-muted-foreground">{rec.issuer}</p>
                <p className="mt-2 text-sm text-muted-foreground">{rec.description}</p>
                {rec.showLink && rec.link && (
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={rec.link} target="_blank" rel="noopener noreferrer">
                        View Certificate <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
